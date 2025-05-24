function Food(){

    const food1 = "Orange";
    const food2 = "Banana";

    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food

//return statement mei js code execute karne ke liye humesha curly braces lagte hain
//return statement ke baahar nhii
//we can return only one element/component whatever we call it

//a component is a small section of code that can use javascript and html