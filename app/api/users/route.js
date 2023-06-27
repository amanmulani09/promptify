export async function GET(request){
//handle GET request from /api/users

// Retrive users from the database or any data source
    const users = [
        {
            id:1,name:'aman',
            id:2,name:'rahul',
            id:3,name:'sagar'
        }
    ];

    //send the users as a response 
    return new Response(JSON.stringify(users))
}