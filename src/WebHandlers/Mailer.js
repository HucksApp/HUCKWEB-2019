
import dotenv from 'dotenv';



/*

var template_params = {
    "reply_to": "reply_to_value",
    "from_name": "from_name_value",
    "message_html": "message_html_value"
 }
 
 var service_id = "default_service";
 var template_id = 
 emailjs.send(service_id, template_id, template_params);

*/


const Mailer= (obj)=>{



    const templateId = "template_AhPXxRIY";
    const templateData = {
                from_name: obj.state.data.name,
                reply_to: obj.state.data.email,
                message_html: obj.state.data.message
    }
    const service_id = "default_service";
    
    window.emailjs.send( service_id , templateId, templateData )
            .then(res=>console.log(res))
            .catch(err=>console.log(err))

};

export default Mailer;