let contain = document.querySelector('.contain')
const displayTestimonial =()=>{
    contain.innerHTML= ` <div class="card p-3">
    <div class="image">
        <img src="" alt="">
    </div>
    <div class="card-text">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto distinctio numquam eos quas quidem id ratione nisi at excepturi possimus!</p>
        <div class="play">
            <div class="btn btn-outline-success">play audio</div>
        </div>
    </div>
    <div class="card-btn d-flex justify-content-between">
        <button class="btn">prev</button>
        <button class="btn">Next</button>
    </div>
</div>`
}



let endpoint = 'https://testimonialapi.toolcarton.com/api'
fetch(endpoint)
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    displayTestimonial(data)
})