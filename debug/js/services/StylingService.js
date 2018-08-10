BH.add("StylingService", function() {
  "use strict";
  eval(BH.System);

  var StylingService = BH.Class(BH.Widget, {
    // Stub
    save_user_info: function(data, successCb, errorCb) {
      var random = Math.floor(Math.random() * 2);

      if (random === 0) {
        if (successCb) {
          //first_name is not passed
          //saw the call stack to determine what is missing
          //momentjs provided to set the time
          successCb({
            scheduled_appointment_date: moment
              .tz(1543000626 * 1000, moment.tz.guess())
              .format("MM/DD/YYYY hh:mm a z"),
            first_name: data.first_name
          });
        }
      } else {
        if (errorCb) {
          errorCb("Sorry, something went wrong.");
        }
      }
    }
  });

  if (!BH.StylingService) {
    BH.StylingService = new StylingService();
    BH.StylingService.render();
  }
});
