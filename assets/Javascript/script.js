function hamburgerButton () {
    const hamburger = document.querySelector(".hamburgerButton")

    hamburger.classList.toggle("hide")
}



function getTestimonial (url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest ()

        xhr.open("GET", url, true)

        xhr.onload = () => {
        resolve(JSON.parse(xhr.response));
    }

        xhr.onerror = () => {
        reject("Network Error!")
    }

        // kirim
        xhr.send();


        })
}



async function allTestimonial () {


    const testimonials = await getTestimonial("https://api.npoint.io/857358e9574e91325854");

       
    // Pakai map
    const testimonialHTML = testimonials.map((testimonial) => {
        return `
        <div class="card">
            <div class="image">
                <img src="${testimonial.image}" alt="">
            </div>
            <div class="quotes">
                <p>"${testimonial.quotes}"</p>
            </div>
            <div class="author">
                <h4>${testimonial.author}</h4>
            </div>
            <div class="rating">
                 ${testimonial.rating} <i class="fa-solid fa-star"></i>
             </div>  
        </div>
        `
    })
    
    document.getElementById("myTestimonials").innerHTML = testimonialHTML.join("")
    
    // Pakai forEach
    
 //    let testimonialHTML = ``
    
 //    testimonials.forEach((testimonial, index) => {
 //        testimonialHTML += `
 //        <div class="card">
 //             <div class="image">
 //                 <img src="${testimonial.image}" alt="">
 //             </div>
 //             <div class="quotes">
 //                 <p>"${testimonial.quotes}"</p>
 //             </div>
 //             <div class="author">
 //                 <h4>${testimonial.author}</h4>
 //             </div>
 //             <div class="rating">
 //                 <p>${testimonial.rating}<i class="fa-solid fa-star"></i></p>
 //             </div>
 //         </div> 
 //        `
 //    })
    
 //    document.getElementById("myTestimonials").innerHTML = testimonialHTML
}



async function filterTestimonial(rating) {

const testimonials = await getTestimonial("https://api.npoint.io/857358e9574e91325854")
 
 const filteredTestimonial = testimonials.filter(testimonial => testimonial.rating == rating)

 if(filteredTestimonial <= 0) {
     return document.getElementById("myTestimonials").innerHTML = `<h1>Data not found</h1>`
 }

 const testimonialHTML = filteredTestimonial.map((testimonial) => {
         return `
         <div class="card">
             <div class="image">
                 <img src="${testimonial.image}" alt="">
             </div>
             <div class="quotes">
                 <p>"${testimonial.quotes}"</p>
             </div>
             <div class="author">
                 <h4>${testimonial.author}</h4>
             </div>
             <div class="rating">
                  ${testimonial.rating} <i class="fa-solid fa-star"></i>
              </div>
         </div>
         `
 });
         

 document.getElementById("myTestimonials").innerHTML = testimonialHTML.join("")
} 




allTestimonial();
