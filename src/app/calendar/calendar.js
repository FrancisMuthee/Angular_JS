
$(document).ready(function() {
    $('#checkInPicker').datepicker({
        format: "dd/mm/yyyy",
        autoclose: true,
        startDate: new Date() // Disables past dates
    }).on('changeDate', function(e) {
        // Set the minimum check-out date to be the day after the check-in date
        $('#checkOutPicker').datepicker('setStartDate', e.date);
    });

    $('#checkOutPicker').datepicker({
        format: "dd/mm/yyyy",
        autoclose: true
    });
});

