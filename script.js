$(document).ready(function () {
    $(function () {
        'use strict'

        $('#wizard2').steps({
            headerTag: 'h3',
            bodyTag: 'section',
            autoFocus: true,
            titleTemplate: '<span class="number">#index#</span> <span class="title">#title#</span>',
            onStepChanging: function (event, currentIndex, newIndex) {
                if (currentIndex < newIndex) {
                    // Step 1 form validation
                    if (currentIndex === 0) {

                        return true;
                    }

                    // Step 2 form validation
                    if (currentIndex === 1) {

                        return true;
                    }

                    // Step 3 form validation
                    if (currentIndex === 2) {

                        return true;
                    }

                    // Step 4 form validation
                    if (currentIndex === 3) {

                        return true;
                    }
                    // Always allow step back to the previous step even if the current step is not valid.
                } else {
                    return true;
                }
            }
        });
        // $("input[name$='cars']").click(function () {
        //     var test = $(this).val();
        //
        //     $("div.desc").hide();
        //     $("#Cars" + test).show();
        // });

        // $('input[name="customRadio3"]').on('click', function () {
        //     if ($(this).val() === 'Y') {
        //         $('#divToeicScote').show();
        //         $('#txtToeicScore').show();
        //     } else {
        //         $('#divToeicScote').hide();
        //         $('#txtToeicScore').hide();
        //     }
        // });
        $('input[name="customRadioDrivingLicense_01"]').on('click', function () {
            if ($(this).val() === 'temporary') {
                $('#numMotorcycle').show();
                //$('#numEmployeePeriod').show();
            }
            else {
                $('#numMotorcycle').hide();
                //$('#numEmployeePeriod').hide();
            }
        });
        $('input[name="customRadioDrivingLicense_02"]').on('click', function () {
            if ($(this).val() === 'temporary') {
                $('#numCar').show();
                //$('#numEmployeePeriod').show();
            }
            else {
                $('#numCar').hide();
                //$('#numEmployeePeriod').hide();
            }
        });
    });

    $(function (){
        $('#datepicker3').datepicker({
            dateFormat: "dd-mm-yy",
            minDate: "1 -1",
            showOtherMonths: true,
            selectOtherMonths: true,
            changeMonth: true,
            changeYear: true
        });
    });

    $(function (){
        $('#datepicker4').datepicker({
            dateFormat: "dd-mm-yy",
            maxDate: "1 -1",
            showOtherMonths: true,
            selectOtherMonths: true,
            changeMonth: true,
            changeYear: true
        });
    });

    $(function (){
        $('#accordion2').accordion({
            heightStyle: 'content',
            collapsible: true
        });
    });

    $(function () {
        var dateFormat = 'dd/mm/yy',
            from = $('#dateFrom')
                .datepicker({
                    defaultDate: '+1w',
                    numberOfMonths: 2
                })
                .on('change', function () {
                    to.datepicker('option', 'minDate', getDate(this));
                }),
            to = $('#dateTo').datepicker({
                defaultDate: '+1w',
                numberOfMonths: 2
            })
                .on('change', function () {
                    from.datepicker('option', 'maxDate', getDate(this));
                });
        function getDate(element) {
            var date;
            try {
                date = $.datepicker.parseDate(dateFormat, element.value);
            } catch (error) {
                date = null;
            }

            return date;
        }
    });


    $(function () {
        var dateFormat2 = 'dd/mm/yy',
            from2 = $('#dateFrom2')
                .datepicker({
                    defaultDate: '+1w',
                    numberOfMonths: 2
                })
                .on('change', function () {
                    to2.datepicker('option', 'minDate', getDate2(this));
                }),
            to2 = $('#dateTo2').datepicker({
                defaultDate: '+1w',
                numberOfMonths: 2
            })
                .on('change', function () {
                    from2.datepicker('option', 'maxDate', getDate2(this));
                });
        function getDate2(element2) {
            var date2;
            try {
                date2 = $.datepicker.parseDate(dateFormat2, element2.value);
            } catch (error) {
                date2 = null;
            }

            return date2;
        }
    });

    $(function () {
        var dateFormat3 = 'dd/mm/yy',
            from3 = $('#dateFrom3')
                .datepicker({
                    defaultDate: '+1w',
                    numberOfMonths: 2
                })
                .on('change', function () {
                    to3.datepicker('option', 'minDate', getDate3(this));
                }),
            to3 = $('#dateTo3').datepicker({
                defaultDate: '+1w',
                numberOfMonths: 2
            })
                .on('change', function () {
                    from3.datepicker('option', 'maxDate', getDate3(this));
                });
        function getDate3(element3) {
            var date3;
            try {
                date3 = $.datepicker.parseDate(dateFormat3, element3.value);
            } catch (error) {
                date3 = null;
            }

            return date3;
        }
    });

    $(function () {
        $("#filepicture").on("change", function () {
            var _fileName = $(this).val();
            $(this).next("label").text(_fileName);

        });
        $('#filepicture').imoViewer({
            'preview': '#image-previewer',
            'minWidth': 50,
            'minHeight': 50,
            'onError': function (message, file) { // error callback
                // 'minWidth': 400,
                // 'minHeight': 300,
            },
        });
    });

    $(function () {
        console.log('A');
        var t = $('#example4').DataTable({
            'ajax': 'assets/data/datatable-objects-copy.txt',
            "columns": [
                {"data": "name", className: 'dt-body-center'},
                {"data": "position", className: 'dt-body-center'},
                {"data": "office", className: 'dt-body-center'},
                {"data": "extn", className: 'dt-body-center'},
                {"data": "salary", className: 'dt-body-center'},
                {"data": "Phone", className: 'dt-body-center'}
            ],
            "paging": false,
            "ordering": false,
            "info": false,
            "searching": false,
        });
    });


    // $(document).ready(function () {
    //     $(".add-new").click(function () {
    //         $(this).attr("disabled", "disabled");
    //         var index = $("table tbody tr:last-child").index();
    //         var row = '<tr>' +
    //             '<td><input type="text" class="form-control" name="name" id="name"></td>' +
    //             '<td><input type="text" class="form-control" name="department" id="department"></td>' +
    //             '<td><input type="text" class="form-control" name="phone" id="phone"></td>' +
    //             '<td><input type="text" class="form-control" name="phone" id="phone"></td>' +
    //             '<td><input type="text" class="form-control" name="phone" id="phone"></td>' +
    //             '<td><input type="text" class="form-control" name="phone" id="phone"></td>' +
    //             '<td><input type="text" class="form-control" name="phone" id="phone"></td>' +
    //             // '<td>' + actions + '</td>' +
    //             '<td>' +
    //             '<a class="add"><i class="material-icons">&#xE03B;</i></a> ' +
    //             '<a class="edit"><i class="material-icons">&#xE254;</i></a>' +
    //             '<a class="delete"><i class="material-icons">&#xE872;</i> ' +
    //             '</td>' +
    //             '</tr>';
    //         $("table").append(row);
    //         $("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
    //         $('[data-toggle="tooltip"]').tooltip();
    //     });
    //
    //     // Add row on add button click
    //     $(document).on("click", ".add", function () {
    //         var empty = false;
    //         var input = $(this).parents("tr").find('input[type="text"]');
    //         input.each(function () {
    //             if (!$(this).val()) {
    //                 $(this).addClass("error");
    //                 empty = true;
    //             } else {
    //                 $(this).removeClass("error");
    //             }
    //         });
    //         $(this).parents("tr").find(".error").first().focus();
    //         if (!empty) {
    //             input.each(function () {
    //                 $(this).parent("td").html($(this).val());
    //             });
    //             $(this).parents("tr").find(".add, .edit").toggle();
    //             $(".add-new").removeAttr("disabled");
    //         }
    //         console.log(input[0].value + " ", input[1].value + " ", input[2].value + " ");
    //
    //     });
    //     // Edit row on edit button click
    //     $(document).on("click", ".edit", function () {
    //         $(this).parents("tr").find("td:not(:last-child)").each(function () {
    //             $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
    //         });
    //         $(this).parents("tr").find(".add, .edit").toggle();
    //         $(".add-new").attr("disabled", "disabled");
    //     });
    //     // Delete row on delete button click
    //     $(document).on("click", ".delete", function () {
    //         $(this).parents("tr").remove();
    //         $(".add-new").removeAttr("disabled");
    //     });
    // });

    // $(function () {
    //     console.log('A');
    //     var t = $('#example').DataTable({
    //         // 'ajax': 'assets/data/datatable-objects-copy.txt',
    //         // "columns": [
    //         //     {"data": "name", className: 'dt-body-center'},
    //         //     {"data": "position", className: 'dt-body-center'},
    //         //     {"data": "office", className: 'dt-body-center'},
    //         //     {"data": "extn", className: 'dt-body-center'},
    //         //     {"data": "salary", className: 'dt-body-center'},
    //         //     {"data": "Phone", className: 'dt-body-center'}
    //         // ],
    //         "paging": false,
    //         "ordering": false,
    //         "info": false,
    //         "searching": false,
    //     });
    // });

});




