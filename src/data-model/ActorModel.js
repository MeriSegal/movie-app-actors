
class ActorModel{
    constructor(firstName, lastName, birthday, imageUrl, imdbLink, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.imageUrl = imageUrl;
        this.imdbLink = imdbLink;
        this.age = age;
    }


    findAge(){
        const currentYear = new Date().getFullYear();
        let age = currentYear - this.birthday.Date.getFullYear();    
        return age;
    }
  
}


export default ActorModel;