import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign,verify} from "hono/jwt"; 
import {  signinInput, signupInput } from  "@prathamx1204/medium-npm/dist";


export const userRouter = new Hono<{    //ts assign variable 
	Bindings: {
		DATABASE_URL: string
    JWT_SECRET: string
	}
}>();

// userRouter.use('/*', async (c, next) => {
//     const header = c.req.header("authorization") || "";
//    //const token = header.split(" ")[1]
//     const response = await verify(header,c.env.JWT_SECRET);
//     if(response.id) 
//     {
//         await next();
//     }
//     else{
//       c.status(403)
//       return c.json({
//         msg:"User not exist"
//       })
//     }
//   })

userRouter.post('/signup', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	 }).$extends(withAccelerate());
	 const body = await c.req.json();
   const {success} = signupInput.safeParse(body);
   if(!success){
    c.status(411);
    return c.json({
      msg:"Wrong Inputs"
    })
   }

	 try {
		  const user = await prisma.user.create({
			data: {
				email: body.email,
				password: body.password
			      }
		    });
        const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
        return c.json({ jwt });
	} catch(e) {
		return c.status(403);
	}
})

userRouter.post('/signin',async (c)=>{
 const prisma = new PrismaClient({
  datasourceUrl:c.env?.DATABASE_URL,
 }).$extends(withAccelerate());


 const body = await c.req.json();
   const {success} = signinInput.safeParse(body);
   if(!success){
    c.status(411);
    return c.json({
      msg:"Wrong Inputs"
    })
   }
 const user = await prisma.user.findUnique({
  where:{
    email: body.email
  }
 })
 if(!user){
  c.status(403);
  return c.json({
    msg:"USER NOT FOUND"
  })
 }
 const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
	return c.json({ jwt });

})