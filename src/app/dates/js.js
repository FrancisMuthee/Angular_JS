<script>
$(document).ready(function() {
    var date = new Date();
    $('.checkIn').datepicker({
        format: 'yyyy-mm-dd',
        todayBtn: true,
        autoclose: true,
        startDate: date
    }).on('changeDate', function(e) {
        var checkInDate = e.date;
        checkInDate.setDate(checkInDate.getDate() + 1);
        $('.checkOut').datepicker('setStartDate', checkInDate);
        $('.checkOut').datepicker('setDate', checkInDate).focus();
    });

    $('.checkOut').datepicker({
        format: 'yyyy-mm-dd',
        todayBtn: true,
        autoclose: true
    });
});
</script>
