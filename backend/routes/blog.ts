import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign, verify } from "hono/jwt";
//import {  } from "@prathamx1204/medium-npm/dist";




export const  blogRouter = new Hono<{
    Bindings: {
		DATABASE_URL: string
        JWT_SECRET: string
	},
    Variables:{
        userId:string
    }
}>();

blogRouter.use("/*",async (c,next)=>{
   const header = c.req.header("authorization") || "";
   const response = await verify(header,c.env.JWT_SECRET);
   if(response.id) 
   {
    c.set("userId",response.id)
    await next();
   }
   else{
     c.status(403)
     return c.json({
       msg:"User not exist"
     })
   }
})

blogRouter.post('/',async (c)=>{
    const body = await c.req.json();
    const authorId = c.get("userId");
    const prisma = new PrismaClient({
        datasourceUrl:c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

   const post =  await prisma.post.create({
       data:{
        title:body.title,
        content:body.content,
        authorId:authorId,
       }
    })
    return c.json({
        id: post.id
    })
  })
  
  blogRouter.put('/',async (c)=>{
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl:c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

   const post = await prisma.post.update({
    where:{
        id:body.id,
    },
    data:{
        title:body.title,
        content:body.content,
    }
   })
    return c.json({
        id: post.id
    })
  })
  
  blogRouter.get('/bulk',async (c)=>{   //addpagination
    const prisma = new PrismaClient({
        datasourceUrl:c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    const blogs = await prisma.post.findMany({
        select:{
            content:true,
            title:true,
            id:true,
            author:{
                select:{
                    name:true,
                }
            }
        }
    });

    return c.json({
        blogs
    })
  })


  blogRouter.get('/:id',async (c)=>{
    const id =  c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl:c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    try{
        const blog = await prisma.post.findFirst({
        where:{
            id: id,
        },
        select:{
            title:true,
            content:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    })
    return c.json({
        blog
    });
} catch(e){
    c.status(411);
    return c.json({
        msg:e
    });
}
  })
  
  