function sendMail(e) {
    e.preventDefault();
    var params = {
        userName: document.getElementById("name").value,
        userMail: document.getElementById("email").value,
        userSubject: document.getElementById("subject").value,
        userMessage: document.getElementById("message").value,
    };
    const serviceId = "service_1qj945e";
    const templateId = "template_xzjbf1n";
    emailjs
        .send(serviceId, templateId, params)
        .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully");
        })
        .catch((err) => console.log(err));
}
