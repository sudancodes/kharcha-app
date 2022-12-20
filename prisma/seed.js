import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
async function main(){
    const admin = await prisma.user.upsert({
        create:{
            username: 'Jsxsudan',
            passwordHash: 'password',
            roleId: 1,
        }
    })
}
main()
    .then(async ()=> {
        await prisma.$disconnect()
    })
    .catch(async (e)=>{
        await prisma.$disconnect
        process.exit(1)
    })