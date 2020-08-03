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
        const currentMonth = new Date().getMonth();

        const birthYear = moment(this.birthday).year();
        const birthMonth = moment("1972-04-17").month()+1;
       
        if(birthMonth>currentMonth)
            return currentYear - birthYear-1;
        else                  
            return  currentYear - birthYear;
    }
  
}


export default ActorModel;