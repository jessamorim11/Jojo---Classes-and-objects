class Personagem {
    constructor (nome, tipo, poder, temporada, vivo) {
        this.nome = nome;
        this.tipo = tipo;
        this.poder = poder;
        this._temporada = temporada;
        this.vivo = vivo;
    }
    
    adicionarTemporada(valor){
        if(valor == 0){
            return this._temporada;
        }
        this._temporada = this._temporada + ', ' + valor;
        return this._temporada;
    }
}
class UsuariodeStand extends Personagem{
    constructor(nome, poder, temporada, vivo, stand){
        super (nome, poder, temporada, vivo, stand);
        this.tipo = 'stand';
        this.stand = stand;
        
    }
    requiem(valor){
        if(valor == 0 ){
            return "Este Stand não possui requiem"
        }
        return "O requiem deste Stand e " + valor;
    }
    mudarStatusdeVida(valor){
        return "Morreu na temporada " + valor;
    }
    
  
}

class UsuariodeHamon extends Personagem{
    constructor(nome, poder, temporada, vivo){
        super (nome, poder, temporada, vivo);
        this.tipo = 'hamon';
    }
    mudarStatusdeVida(valor){
        return "Morreu na temporada " + valor;
    }
  
}

class semPoderes extends Personagem{
    constructor(nome, poder, temporada, vivo){
        super (nome,  poder, temporada, vivo);
        this.tipo = 'sem_poder';
        this.poder = 'Esse personagem não tem poderes'
    }
    mudarStatusdeVida(valor){
        return "Morreu na temporada " + valor;
    }
    
}