function loadDept() {
    $.ajax({
        url:"dept",
        dataType:"json",
        async:false,//改成同步请求
        success:function (data) {
            data.forEach(dept=>{
                let $op=$(`<option value="${dept.deptNo}">${dept.dname}</option>`);
                $("select[name=deptno]").append($op);
            })
        }
    });
}