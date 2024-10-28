// Exercise 1: Fetch User Data
// Create a function called fetchUserData that fetches data from the following URL:
// https://jsonplaceholder.typicode.com/users/1
// Use fetch to get the user data.
// Log the user's name and email in the console.
// Handle any errors that might occur.

const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const user = await response.json();
        console.log(`Name: ${user.name}, Email: ${user.email}`);
    } catch (error) {
        console.log("An error occurred:", error);
    }
}

console.log('Exercise 1:')
fetchData();


// Exercise 2: Fetch Post Data and Check for Status
// Create a function called fetchPostData to fetch data from this URL:
// https://jsonplaceholder.typicode.com/posts/1
// Use fetch to retrieve the post data.
// Check the status of the response to ensure it’s successful (status 200).
// If successful, log the post title and body.
// If unsuccessful, log a custom error message (e.g., "Failed to fetch post data").


const fetchPostData = async () => {
    const response = await fetch ('https://jsonplaceholder.typicode.com/posts/1');

    try{
        if(response.ok) {
            const post = await response.json();
            console.log(`${post.title}: ${post.body}`);
        } else {
            console.log("Failed to fetch post data")
        }
    } catch(error) {
        console.log(error);
    }
}

console.log('Exercise 2: ')
fetchPostData();


// Exercise 3: Fetch User Data and Related Posts
// For this task:

// Fetch the user data from this endpoint: https://jsonplaceholder.typicode.com/users/1.
// After fetching the user, fetch the posts related to this user using https://jsonplaceholder.typicode.com/posts?userId=1.
// Log the user's name and each post title.


const fetchRelatedPost = async () => {

    try{
        const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const user = await userResponse.json();
        console.log(user);

        const postRelatedResponse = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
        const postRelated= await postRelatedResponse.json();
        console.log(postRelated);



    } catch(error) {
        console.log(error);
    }
}

console.log("Exercise 3: ")
fetchRelatedPost();