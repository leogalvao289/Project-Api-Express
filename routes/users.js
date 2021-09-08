import express from 'express';

const router = express.Router();

export default router;

const users = [
   {
         firstName : "Jane",
         lastName:  "Doe",
         age : 25  
        }
]

router.get('/', (req, response) => {
  response.send(users);
}); 
 
router.post('/' , (req, response) => {
   const user = req.body;
   users.push(user)
   response.send(`User with the name ${user.firstName} added to the DataBase`)
})

