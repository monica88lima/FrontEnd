class StarRater extends HTMLElement{
    constructor(){
        super()
        this.build();

 
      
    }
    build(){
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `Hello!`;
        shadow.appendChild(this.style());

        const rater = this.createRater();
        this.stars= this.createStar();
        this.stars.forEach(star => rater.appendChild(star)); 
        this.resetRating();
        shadow.appendChild(rater);
        
    }
    

    createRater(){
        const rater = document.createElement('div');
        rater.classList.add('star-rater');
        rater.addEventListener('mouseout', this.resetRating.bind(this));
       
        return rater;

    }

    createStar(){
        const createStar = (_, id) =>{
            const star = document.createElement('span');
            star.classList.add('star');
            star.setAttribute('data-id', Number (id)+1);
            star.innerHTML = '&#9733;'; 
           
            star.addEventListener('click', this.setRating.bind(this))
            star.addEventListener('mouseover', this.setHover.bind(this))
             return star;

        }
        return Array.from({length: 5}, createStar);
    }
    resetRating(){
        this.currentRatingValue = this.getAttribute('data-rating') || 0;
        this.hightlightRating();
    }
    setRating(event){
    this.setAttribute(
        'data-rating', 
        event.currentTarget.getAttribute('data-id'));
    }
    setHover(event){
        this.currentRatingValue = event.currentTarget.getAttribute('data-id');
        this.hightlightRating();
    }
    hightlightRating(){
      this.stars.forEach(star => {
        star.style.color = this.currentRatingValue >= star.getAttribute('data-id') ? 'yellow' : 'rgb(69, 71, 73)';
      });


    }


    style(){
        const style = document.createElement('style');
        style.textContent = `
            .star {
                color:rgb(69, 71, 73);
                font-size: 5rem;
                cursor: pointer;
    }`
    return style;
}
                
}
        
        

customElements.define('star-rater', StarRater);