import toastr from 'toastr';
import 'toastr/build/toastr.min.css';



toastr.options={
        hideDuration: 3000,
        timeOut: 10000,
        positionClass: 'toast-top-center'

};

toastr.clear();


export default toastr;