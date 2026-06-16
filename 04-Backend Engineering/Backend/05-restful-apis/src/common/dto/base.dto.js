import Joi from "joi"

class BaseDTO {
  static schema = Joi.object({}) // Humein nhi pata isse kon use karega. Ho sakta hai 'name , email & password' or 'form details' validate karna ho. Joh bhi validate karega we expect ki woh 'schema' ko overwrite karega 

  // Schema mein joh bhi data aayega usae validate karne k liye function
  static validateSchema(data) {
    // The code written below is very specific to Joi

    const { error, value } = this.schema.validate(data, {
      abortEarly: false, // By default : true. Jaise hi 1st error aata hai wahi stop kardeta hai. We want all the error together 
      stripUnknown: true // Means : Maine joh bhi fields bataye hai uske alawa koi fields aaye toh unhe hata do
    }) // validate method by default humein Joi se milta hai. Joi validates input 'data' against schema
    // When the 'validate' is method is executed it gives us 2 things : 1. error & 2. value

    if (error) {
      /*
       {
          details: [
            {
              message: '"email" is required',
              path: ['email'],
              type: 'any.required'
            },
            {
              message: '"password" length must be at least 8 characters long',
              path: ['password'],
              type: 'string.min'
            }
          ]
        }
       */
      console.log('Error in BaseDTO(to check what we get inside error) : \n', error);
      const errors = error.details.map(d => d.message)
      return { errors, value: null }
    }

    return { errors: null, value }

  }
}
export default BaseDTO