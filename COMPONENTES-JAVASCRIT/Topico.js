class Topico extends HTMLElement{
    constructor(){
        super()
        this.build();
    }
    build(){
        const shadow = this.attachShadow({mode: 'open'});
        
        shadow.appendChild(this.style());
        const style = document.createElement('link');
        style.rel = 'stylesheet';
        style.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
        shadow.appendChild(style);
        
        const topico = this.criarTopico();
        shadow.appendChild(topico);

       
        
    }
    criarTopico(){
        const topico= document.createElement('div');
        topico.classList.add('topico');

        const nomeTopico = this.getAttribute('nome') || 'Tópico';
        const titulo = this.criartitulo(nomeTopico);

        const classeIcone = this.getAttribute('icone') || 'fa-question';
        const icone = document.createElement('i');
        icone.classList.add('fa-solid');
        icone.classList.add(classeIcone);
        topico.appendChild(icone);
        topico.appendChild(titulo);
        
        return topico;
    }

    criartitulo(nomeTopico){
        const titulo = document.createElement('h2');
        titulo.innerHTML = nomeTopico;
        return titulo;
    }

    style(){
        const style = document.createElement('style');
        style.textContent = `
        .topico {
    display: flex;
    align-items: center; 
    gap: 16px; 
    background-color:rgb(252, 251, 251);
  
    
}

.topico i,
.topico h2 {
    font-size: 24px; 
    color: gray ;
    
}
.topico h2 {
    font-family: 'Poppins', sans-serif;
}
           
        `;
        return style;
    }
   
}
customElements.define('app-topico', Topico);