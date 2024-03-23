import { Hono } from 'hono'
import { userRouter } from '../routes/user'
import { blogRouter } from '../routes/blog'
import {cors} from 'hono/cors'


//https://backend.pratham-singla-762.workers.dev

const app = new Hono<{    //ts assign variable 
	Bindings: {
		DATABASE_URL: string
    JWT_SECRET: string
	}
}>();

app.use('/*',cors())
app.route('/api/v1/user', userRouter)
app.route('/api/v1/blog', blogRouter)

export default app;
