# Google Places Autocomplete

Get Google autocomplete dropdown in your angular form in just few lines. to see the code you can visit [Github](https://github.com/hardik-godhani/google-autocomplete).


# How to use!
Import this line into your [index.html]() file.

    <script async defer type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=<your-api-key>&libraries=places&v=weekly"></script>


Pass your FormGroup as <strong>form</strong> and input field as <strong>selector</strong> as below.

    <google-autocomplete [form]="your-instance-of-form" [selector]="name-of-field-for-autocomplete"></google-autocomplete>
