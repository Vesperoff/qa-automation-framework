export const resourcesSchema = {
  type: 'object',
  required: ['page', 'per_page', 'total', 'total_pages', 'data'],
  additionalProperties: true,
  properties: {
    page: { type: 'number' },
    per_page: { type: 'number' },
    total: { type: 'number' },
    total_pages: { type: 'number' },
    data: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
        required: ['id', 'name', 'year', 'color', 'pantone_value'],
        properties: {
          id: { type: 'number' },
          name: { type: 'string' },
          year: { type: 'number' },
          color: { type: 'string' },
          pantone_value: { type: 'string' },
        },
      },
    },
  },
} as const;
