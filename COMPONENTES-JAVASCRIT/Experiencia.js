class Experiencia extends HTMLElement{
    constructor(){
        super()
        this.build();
    }
    build(){
        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.style());
       
      

        const experiencia = this.criarExperiencia();
        shadow.appendChild(experiencia);
        
       
    }
    criarExperiencia(){
        const expe= document.createElement('div');
        expe.classList.add('experiencia');
        const nomeEmpresa = this.getAttribute('nome') || 'Nome Empresa';
        const empresa = this.nomeEmpresa(nomeEmpresa);

        const cargoDt = this.cargoDatas();

        const descricao= document.createElement('p');
        descricao.id='descricaoBreve';
        descricao.innerHTML = this.getAttribute('descricao') || 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint non necessitatibus quis repellat laboriosam quisquam magnam praesentium, voluptates in expedita provident ducimus. Sequi hic aspernatur neque ipsam labore. Nisi, consequatur!';
        
        const detalhes= document.createElement('details');
        detalhes.innerHTML = this.getAttribute('detalhes') || 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi earum magni maiores quod explicabo id corrupti rerum numquam culpa excepturi ea voluptatum, non nulla. Voluptate quas et rem perspiciatis vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolores possimus ullam dicta expedita, modi, neque ipsum dolorem dolore quaerat recusandae temporibus quasi veniam quisquam debitis facilis rerum fuga! Nesciunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Error mollitia iure ducimus magnam unde accusantium distinctio, quisquam reiciendis nobis odio facere quasi, maiores, itaque laudantium? Fuga animi illo iure distinctio.';
        
   
        expe.appendChild(empresa);
        expe.appendChild(cargoDt); 
        expe.appendChild(descricao);
        expe.appendChild(detalhes);
      

        return expe;
    }
    nomeEmpresa(nomeEmpresa){
        const titulo = document.createElement('h2');
        titulo.innerHTML = nomeEmpresa;
        return titulo;
    }

    cargoDatas(){
        const cargoData= document.createElement('div');
        cargoData.classList.add('dados');

        const cargo = document.createElement('p');
        cargo.id = 'cargo';
        cargo.innerHTML = this.getAttribute('cargo') || 'Cargo de AlgumaCoisa';
        cargoData.appendChild(cargo);

        const data = document.createElement('p');
        data.id = 'data';
        data.innerHTML = this.getAttribute('data') || '02-2023 - Atualmente';
        cargoData.appendChild(data);
        return cargoData;

    }
 

    style(){
        const style = document.createElement('style');
        style.textContent = `
          .experiencia {
   
    margin: 20px auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #f5f5f5;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
}

.experiencia h3 {
    font-size: 22px;
    color: #333;
    margin-bottom: 5px;
}

#cargo {
    font-size: 18px;
    font-weight: bold;
    color: #555;
}

#data {
    font-size: 16px;
    color: #777;
    font-style: italic;
}

#descricaoBreve {
    font-size: 16px;
    color: #444;
    margin-top: 10px;
    line-height: 1.9;
}

details {
    margin-top: 15px;
    padding: 10px;
    
    border-radius: 5px;
    cursor: pointer;
}

details:hover {
    background-color:rgb(253, 253, 253);
}
    .dados{
    display: flex;
    
    gap: 36px;
}
           
        `;
        return style;
    }
}
customElements.define('app-experiencia', Experiencia);