const ctx = document.getElementById('myChart');

  var chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep'],
      datasets: [{
        label: 'Total Submission',
        data: [100, 150, 178, 333, 375, 432, 423, 450],
        borderWidth: 4,
        borderColor: '#6C19FF',
        backgroundColor: '#6C19FF',
      },
      {
        label: 'Sucess Submission',
        data: [50, 100, 120, 280, 333, 375, 320, 400],
        borderWidth: 4,
        borderColor: '#61CEF8',
        backgroundColor: '#61CEF8',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  




  $('#downloadPdf').click(function(event) 
  {
    var reportPageHeight = $('#reportPage').innerHeight();
    var reportPageWidth = $('#reportPage').innerWidth();

    var pdfCanvas = $('<canvas/>').attr({
      id: "canvaspdf",
      width: reportPageWidth,
      height: reportPageHeight
    });

    var pdfctx = $(pdfCanvas)[0].getContext('2d');
    var pdfctxX = 0;
    var pdfctxY = 0;
    var buffer = 100;

    $("canvas").each(function(index) {
      var canvasHeight = $(this).innerHeight();
      var canvasWidth = $(this).innerWidth();

      pdfctx.drawImage($(this)[0],pdfctxX, pdfctxY, canvasWidth, canvasHeight);
      pdfctxX += canvasWidth + buffer;

      if (index % 2 === 1) {
        pdfctxX = 0;
        pdfctxY += canvasHeight + buffer;
      }
    });

    var pdf = new jsPDF('l', 'pt', [reportPageWidth, reportPageHeight]);
    pdf.addImage($(pdfCanvas)[0], 'PNG', 0, 0);

   pdf.save('filename.pdf');

  });






$(document).ready(function() {
    $('#example').DataTable( {
        dom: 'BRfrtlip',
        buttons: [
            'csv'
        ],

        // lengthMenu: [
        //     [10, 25, 50, -1],
        //     [10, 25, 50, 'All'],
        // ],

        ajax: "data.txt",
        columns: [
        { data: "id"},
        { data: "name"},
        { data: "position"},
        { data: "salary"},
        { data: "start_date"}
        ]
    } );
} );







  $(function(){
  $('#datepicker').datepicker();
});

$(function(){
  $('#datepicker-2').datepicker();
});
