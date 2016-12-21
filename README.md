# vehicle-tracker-functional-style

Note: This project doesn't work. It is a spike working off of an idea as if the idea were real to help flesh out the requirements and if the idea would work.

function-injection:

require('function-injection') should return a function.
this function is equivelent to fi.define

fi.define(functionDefinition)
functionDefinition: {
  implements: string, (implementationKey) this represents the function that is being implemented. this will be the key you use to get the function injected into other functions
  dependsOn: string/Array/Object/fi.function,
    if it's a string- the string represents a function and will be of the same name. (The key is defined by the functions "implements" field when it is defined)
    if array, the array can contain strings or fi.function's
    if object- the key of each object represents what the key will be in the injected object passed, each value can be a string or fi.function
    if fi.function: this is returned by either fi.function('implementationKey') or fi.with('model') and represents
  requirements: string/Array/Object/fi.model - same as above, but representing models.
  function: the function that implements the given implementationKey. function signature must be function(injected, requirements)
    where injects will contain the functions of the dependencies listed in "dependsOn". The functions in inject will always return a promise, and always take an object for requirements.
    example: bar requires ['fooModel', 'barModel'], foo dependsOn ['bar'], so the injected object passed to foo will contain a function 'bar' that accepts an object. the object must fufill bar's requirements
  cloneInput: boolean - defaults to true, when true input will be cloned
  cloneOutput: boolean - defaults to false, when true, output is cloned. if a function clones it's output and another function clones it's input, the data will be cloned twice.
    (reason: output clone to prevent writing back to the source data if input could not be cloned. Input clone to prevent writing back to the source data, if output is cloned but the promise is .then'd by
    multiple function, then the siblings could inadvertently modify the data)
  canCache: boolean - defaults to false. If true, results are saved the first time the function is called. if a call is made that matches the arguments supplied, will return the same value.
}

fi.with(object: {(requirementKey): (modelKey) or object {modelKey: fieldKey}}) - this returns an fi.function where the requirementKey specified will map the given model to the dependency's requirementKey type.
  if this is passed to functionDefinition, this will change the requirements type to the type specified. (See vehicle/applyVehicleCount.define.js for example)
  object modelKey:fieldKey only need be supplied if the given model has multiple fields that meet the nessisary requirements, otherwise this will resort to using priority for mapping.
  Priority will go by model's type, field's directly referencing the requirement's field, fields indirectly referencing the requirements field (chained references), then the fields type.
  when attached to an object, the implementationKey will be the propertyKey of the results of fi.with()
    example: fi({
      implements: 'foo',
      function: foo, (for purposes of this example, foo is defined elsewhere)
      dependsOn: {
        bar: fi.with({ barId: 'fooModel' }) // context here would be 'bar', this is functionally the same as fi.function('bar').with({ barId: 'fooModel' })
      }
    })

  returns a with definition that is missing the function impementationKey. Can be used when the implementationKey of the function can be determined by context

fi.function(implementationKey)
returns: fi's object representing a function(fi.function)
{
  with: same as fi.with, but the implementationKey is defined so context is not required.
}

fi.ennumerable(modelKey)
returns: an object representing an ennumerable who's value's are of the given model. Example: fi.ennumerable('foo') could represent an array of fi.model('foo')

fi.model(string)
  returns an fi.model representation.
  representation:
  {
    $field: function(string propertyName) -creates a representation of a field of the given model. This is what should be used when one model references another models field.
    $validate: - function(\*) - validates that the given value is a model of (modelKey)
    $isDefined: - boolean, true when the model has been defined
    {propertyName}: fi.field - when the model is defined, the named properties will exist in the object returned by fi.model. This property will be a reference to the type as well as the parent of this field.
      this exists to allow for automatic mapping from one object to another, so that if one object contains a reference to a field, and another object either is that field, is that field's type, or contains a reference to that field, than that will be used.
  }

fi.model({  - function you call to define a model.
  defines: string (modelKey) - the key of the model being defined.
  test: string (implementationKey) - the key of the method to validate the given value. Must be a function who's requirement is 'value' of type '\*'.
    the test must either throw an error or otherwise break the promise chain (assert is one of the supplied ways). Should be able to build a list of all failed tests
  modelDefinition: string (modelKey) OR object
  {
    fieldKey: modelKey
  }
    if string (modelKey), the given object is the modelKey. it can be a more specific implementation of that model though (validated through the test),
    if object, then the model is defined as an object with the given fieldKey's where each fieldKey is a type of the modelKey supplied. Calling validate will call the test function supplied if it exists,
      and will call validate on each of the fields.
  })

fi.entry(object { - returns a function matching the signature of the function supplied minus the first argument (inject), returns promise
    dependsOn: string (implementationKey) - Array, Object, fi.function. Same requirements as dependsOn for fi.define,
    function: function(injected, \* ...) -a function that takes injected and N arguments of any type. injected is populated with dependencies from dependsOn,
  })

fi.map(object { -- explicitly defines a mapping from one type to another for use with the fi.with

  })
