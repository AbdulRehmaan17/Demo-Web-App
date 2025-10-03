let inputHeading = document.getElementById('heading');
let inputAuthor = document.getElementById('author');
let inputDate = document.getElementById('date');
let inputBody = document.getElementById('body');
let inputImage = document.getElementById('image');

class Blog {
    constructor(heading, author, date, body, image) {
        this.heading = heading;
        this.author = author;
        this.date = date;
        this.body = body;
        this.image = image;
    }
}

class BlogStore {
    static getBlogs() {
        return JSON.parse(localStorage.getItem("blogs")) || [];
    }

    static save(blog) {
        let blogs = BlogStore.getBlogs(); // FIXED name
        blogs.push(blog);
        localStorage.setItem("blogs", JSON.stringify(blogs));
    }
}

class Handle {
    static submitForm(e) {
        e.preventDefault();

        let blog = new Blog(
            inputHeading.value,
            inputAuthor.value,
            inputDate.value,
            inputBody.value,
            inputImage.files[0] ? inputImage.files[0].name : ""
        );

        BlogStore.save(blog); // FIXED name

        alert("Blog is saved");

        Handle.clearForm();
    }

    static clearForm() {
        inputHeading.value = "";
        inputAuthor.value = "";
        inputDate.value = "";
        inputBody.value = "";
        inputImage.value = "";
    }
}

// Attach event to form
document.querySelector("#blogForm").addEventListener("submit", Handle.submitForm); // FIXED name
