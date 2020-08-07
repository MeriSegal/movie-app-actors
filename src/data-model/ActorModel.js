import moment from 'moment';

class ActorModel{
    constructor(id, firstName, lastName, birthday, imageUrl, imdbLink){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.imageUrl = imageUrl;
        this.imdbLink = imdbLink;
    }

    findAge(){
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();

        const birthYear = moment(this.birthday).year();
        const birthMonth = moment(this.birthday).month()+1;
       
        if(birthMonth>currentMonth)
            return currentYear - birthYear-1;
        else                  
            return  currentYear - birthYear;
    }
  
}


export default ActorModel;