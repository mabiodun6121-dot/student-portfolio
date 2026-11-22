function addTask() {
    let input =
    document.getElementById("taskInput");
    let list =
    document.getElementById("taskList");

    if(input.value.trim() === " "){
        alert("Enter a task!");
    }
}

let li = 
document.createElement("li");
li. textContent = input.value;
li.onclick = funtion() {
    li.classList.toggle("completed");
};

let btn = 
document.createElement("button");
btn.textContent = "delete";

btn.onclick = function(event){
    event.stopPropagation();
    li.appendChild(btn)
    list.appendchild(li);

    input value = " ";
}



document.getElementById("contactForm").onsubmit = function(event) {
    event.preventDefault();

    let name = 
     document.getElementById("name").value.trim();

    let email =
     document.getElementById("email").value.trim();

    let phone = 
     document.getElementById("phone-number").value.trim();

    let message = 
     document.getElementById("message").value.trim();

    if(!name|| !email|| !phone ||!message)
        alert("Fill all fields!");
    else if (!email.includes("@")||!email.includes("."))
        alert("Enter a valid email!");
    else if (!/^[0-9]+$/.test(phone))
        alert("Enter numbers only for phone!");
    else{
        alert("Form submitted successfully!");
        this.reset();
    }
};