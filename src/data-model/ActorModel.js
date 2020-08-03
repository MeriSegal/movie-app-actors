import moment from 'moment';

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
        const birthYear = moment(this.birthday).year();

        const age = currentYear - birthYear;
                  
        return age;
    }
  
}


export default ActorModel;