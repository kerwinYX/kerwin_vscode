import request from  '@/utils/request'

export default{
    //讲师列表(条件分页查询)
    getTeacherListPage(currentPage,size,teacherQuery){
        return request({
            //url:`/eduService/teacher/pageListTeacherByCondition/'+currentPage+'/'+size`,
            url:`/eduService/teacher/pageListTeacherByCondition/${currentPage}/${size}`,
            method:'post',
            //teacherQuery对象，后端接口使用RequestBody获取数据
            //data表示把对象转换json进行传递到数据接口
            data: teacherQuery
        })
    },
     //删除讲师
     deleteTeacherId(id) {
        return request({
            url: `/eduService/teacher/${id}`,
            method: 'delete'
          })
    },
    //添加讲师
    addTeacher(teacher) {
        return request({
            url: `/eduService/teacher/addTeacher`,
            method: 'post',
            data: teacher
          })
    },
    //根据id查询讲师
    getTeacherInfo(id) {
        return request({
            url: `/eduService/teacher/find/${id}`,
            method: 'get'
          })
    },
    //修改讲师
    updateTeacherInfo(teacher) {
        return request({
            url: `/eduService/teacher/updateTeacher`,
            method: 'post',
            data: teacher
          })
    }
}