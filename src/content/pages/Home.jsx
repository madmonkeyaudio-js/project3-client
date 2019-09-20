import React from 'react'
import {Alert} from 'reactstrap'
function Home(props) {
    return (
        <div> 
           <Alert color="primary"> <h5>Welcome!</h5>  </Alert> 
             <Alert color="warning"> Holindary was created with the purpose of planning and saving your holiday experiences. 
                You may signup/login to see the holidays currently recognized nationally 
                in the US, as well as international holidays. You may save these holidays to 
                your profile, add what you'd like to do for each holiday, or create your own custom experience.
            </Alert>
        </div>
    )
}

export default Home