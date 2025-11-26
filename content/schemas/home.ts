import { z } from 'zod'
export const homeSchema = z.object({
  title: z.string().default('Home'),
  count: z.number().nonnegative().default(0),
  image: z.object({
    src: z.string().editor({ input: 'media' }),
    alt: z.string(),
  }),
  image_second: z.string().default('images/red_cat_2.jpg'),
  list: z
    .array(
      z.object({
        image: z.string(),
        text: z.string(),
        value: z.number().nonnegative(),
      })
    )
    .default([]),
})
