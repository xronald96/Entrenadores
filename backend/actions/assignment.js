
const assignmentAlgorithm = (body)=>{
    return new Promise((resolve, reject) =>{ 
        let res = []; 
        // Ordenamos por exigencia de clientes y por reputacion para poder asignar 
        let clients = body.clients.sort((a,b)=>{return a.trainerReputation < b.trainerReputation})
        let trainers = body.trainers.sort((a,b)=>{return a.reputation < b.reputation})
        clients.forEach(client => {
            trainers.forEach(trainer => {
                if(trainer.available>0){
                    linkClientToTrainer(res, trainer,client)
                    trainer.available--;
                }

            })
        });
        console.log('resutlafd', res)

    })
}

const linkClientToTrainer = (res, trainer, client)=>{
    let existTrainer = res.find(el=>{el.trainerId === trainer.id});
    if(existTrainer)
        existTrainer.clients.push(client);
    else  
        res.push({
            trainerId:trainer.id,
            clients:[client]
        })
}

module.exports = {
    assignmentAlgorithm
}