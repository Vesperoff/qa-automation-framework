import Ajv, { type AnySchema } from 'ajv';

const ajv = new Ajv({ allErrors: true });

export class SchemaValidator {
  static validate(schema: AnySchema, data: unknown): void {
    const validate = ajv.compile(schema);
    const isValid = validate(data);

    if (!isValid) {
      throw new Error(`Schema validation failed: ${ajv.errorsText(validate.errors)}`);
    }
  }
}
