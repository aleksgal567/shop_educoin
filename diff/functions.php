<?php
include_once "db.php";

//////чат

function viewMessage($message){
    /*  array(6) {
    ["id"]=>    string(1) "1"
    ["created"]=>    string(19) "2020-05-22 22:57:44"
    ["opened"]=>    string(1) "0"
    ["id_sender"]=>    string(1) "4"
    ["id_receiver"]=>    string(1) "0"
    ["message"]=>    string(83) "Уважаемые студенты! начинается сдача хвостов"
  }*/
    ?>
    <li>
        <p>кто: <?=getUserName($message["id_sender"])?></p>
        <?php
        if ($message["id_receiver"]){
            ?>
            <p>кому: <?=getUserName($message["id_sender"])?></p>
            <?php
        }
        ?>
        <p><?=$message["message"];?></p>
    </li>
    <?php
}

/**
 * получить имя юзера
 * @param $id
 * @return mixed|string
 */
function getUserName($id){
    global $link;
    $query = "SELECT `name`, `surname`, `patronymic` FROM `peoples` WHERE `id`=".$id;

    $result = mysqli_query($link, $query);
    if(!$result)
        return "";

    $row = mysqli_fetch_assoc($result);
    mysqli_free_result($result);
    return $row["surname"]." ".$row["name"]." ".$row["patronymic"];
}

/**
 * отобразить участника чата
 * @param $array
 */
function viewChatMember($array){
    /*array(6) { //препод
    ["id"]=>    string(1) "4"
    ["name"]=>    string(21) "Пелевин О.О."
    ["email"]=>    string(13) "pelev@mail.ru"
    ["password"]=>    string(5) "pelev"
    ["list_groups"]=>    string(5) "[1,4]"
    ["list_subjects"]=>    string(4) "[11]"
  }*/
    /* array(5) { //студент
    ["id"]=>    string(1) "7"
    ["name"]=>    string(8) "Вася"
    ["id_group"]=>    string(1) "1"
    ["email"]=>    string(11) "vas@mail.ru"
    ["password"]=>    string(3) "vas"
  }
     */
    ?>
    <li>
        <?php
        if (isset($array["list_groups"])){
            echo "<h3>Преподаватель</h3>";
        }
        if (isset($array["id_group"])){
            echo "<h3>Студент</h3>";
        }
        ?>
        <h2><?=$array["surname"]." ".$array["name"]." ".$array["patronymic"];?></h2>
        <p><?=$array["email"];?></p>
        <p><?=$array["id"];?></p>

    </li>
<?php
}

/**
 * получить учавствующих чата указанной группы по указанному предмету
 * @param $id_group
 * @param $id_subject
 * @return array
 */
function getChatMembers($id_group, $id_subject){
    $teachers = getTeachersByGroupAndSubject($id_group, $id_subject);
    $students = getStudentsByGroup($id_group);
    if(!count($teachers))
        return $students;
    if(!count($students))
        return $teachers;
    return array_merge ($teachers, $students);
}

/**
 * вставка сообжения чата. формат массива ( `id_group`, `id_subject`, `id_sender`, `id_receiver`, `message`)
 * @param $array
 * @return bool|mysqli_result
 */
function insertMessage($array){
    global $link;
    $sql = "INSERT INTO `chat` ( `id_group`, `id_subject`, `id_sender`, `id_receiver`, `message`)
    VALUES ( '".$array["id_group"]."', '".$array["id_subject"]."', '".$array["id_sender"]."', '".$array["id_receiver"]."', '".$array["message"]."')";
    $result = mysqli_query($link, $sql);
    return $result;
}

/**
 * получить сообщения чата группы по предмету
 * @param $id_group
 * @param $id_subject
 * @return array|null
 */
function getMessages($id_group, $id_subject){
    global $link;
    $query = "SELECT `id`,`created`,`opened`,`id_sender`,`id_receiver`,`message` 
            FROM `chat` 
            WHERE `id_group`=".$id_group." AND `id_subject`=".$id_subject;

    $result = mysqli_query($link, $query);
    if(!$result)
        return null;
    $temp_arr = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $temp_arr[] = $row;
    }

    mysqli_free_result($result);
    return $temp_arr;
}


/////студенты

/**
 * вставка студента в базу. входящий массив (`name`,`surname`,`patronymic`,`id_group`, `email`, `password`)
 * @param $array
 * @return bool|mysqli_result
 */
function insertStudent($array){
    global $link;
    $sql = "INSERT INTO `peoples` (`name`, `surname`, `patronymic`, `id_group`, `email`, `password`, `teacher`) 
    VALUES ('".$array["name"]."', '".$array["surname"]."', '".$array["patronymic"]."', '".$array["id_group"]."', '".$array["email"]."', '".$array["password"]."', '0')";
    $result = mysqli_query($link, $sql);
    return $result;
}

/**
 * редактирование студента. структура массива (name,surname,patronymic,email,password,id)
 * @param $array
 * @return bool|mysqli_result
 */
function editStudent($array){
    global $link;
    $sql = "UPDATE `peoples` 
    SET `name` = '".$array["name"]."',`surname` = '".$array["surname"]."', `patronymic` = '".$array["patronymic"]."',`email` = '".$array["email"]."', `password` = '".$array["password"]."' 
    WHERE `teacher` = 0 AND `id` = ".$array["id"];
    $result = mysqli_query($link, $sql);
    return $result;
}

/**
 * получить студента кратко
 * @param $id
 * @return string[]|null
 */
function getStudent($id){
    global $link;
    $query = "SELECT `id`,`name`,`surname`,`patronymic`,`id_group`,`email`,`password` FROM `peoples` WHERE `id`=".$id;

    $result = mysqli_query($link, $query);
    if(!$result)
        return null;

    $row = mysqli_fetch_assoc($result);
    mysqli_free_result($result);
    return $row;
}

/**
 * получить детально студента
 * @param $id
 * @return string[]|null
 */
function getStudentDetail($id){
    global $link;
    $query = "SELECT `id`,`name`,`surname`,`patronymic`,`id_group`,`email`,`password` FROM `peoples` WHERE `id`=".$id;

    $result = mysqli_query($link, $query);
    if(!$result)
        return null;

    $row = mysqli_fetch_assoc($result);
    $row["detail_group"] = getGroup($row["id_group"]);
    mysqli_free_result($result);
    return $row;
}

/**
 * получить студентов одной группы
 * @param $id_group
 * @return string[]|null
 */
function getStudentsByGroup($id_group){
    global $link;
    $query = "SELECT `id`,`name`,`surname`,`patronymic`,`id_group`,`email`,`password` FROM `peoples` WHERE `teacher` = 0 AND `id_group`=".$id_group;

    $result = mysqli_query($link, $query);
    if(!$result)
        return null;
    $temp_arr = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $temp_arr[] = $row;
    }

    mysqli_free_result($result);
    return $temp_arr;
}



//////преподы

/**
 * получение одного препода
 * @param $id
 * @return string[]|null
 */
function getTeacher($id){
    global $link;
    $query = "SELECT `id`,`name`,`surname`, `patronymic`,`email`,`password`,`list_groups`, `list_subjects` FROM `peoples` WHERE `teacher`=1 AND `id`=".$id;

    $result = mysqli_query($link, $query);
    if(!$result)
        return null;

    $row = mysqli_fetch_assoc($result);
    mysqli_free_result($result);
    return $row;
}

/**
 * получение одного препода подробно
 * @param $id
 * @return string[]|null
 */
function getTeacherDetail($id){
    global $link;
    $query = "SELECT `id`,`name`,`surname`, `patronymic`,`email`,`password`,`list_groups`, `list_subjects` FROM `peoples` WHERE `teacher`=1 AND `id`=".$id;

    $result = mysqli_query($link, $query);
    if(!$result)
        return null;

    $row = mysqli_fetch_assoc($result);
    $row["array_subjects"] = getSubjectsCurrent(json_decode($row["list_subjects"]));
    $row["array_groups"] = getGroupsCurrent(json_decode($row["list_groups"]));
    mysqli_free_result($result);
    return $row;
}

/**
 * получение всех преподавателей
 * @return array|null
 */
function getTeachers(){
    global $link;
    $query = "SELECT `id`,`name`,`surname`, `patronymic`,`email`,`password`, `list_groups`, `list_subjects` FROM `peoples` WHERE `teacher`=1";

    $result = mysqli_query($link, $query);
    if(!$result)
        return null;
    $temp_arr = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $temp_arr[] = $row;
    }

    mysqli_free_result($result);
    return $temp_arr;
}

/**
 * получение преподавателей, которые преподают в конкретной группе
 * @param $id_group
 * @return array|null
 */
function getTeachersByGroup($id_group){
    global $link;
    $query = "SELECT `id`,`name`,`surname`,`patronymic`,`email`,`password`,`list_groups`, `list_subjects` FROM `peoples` WHERE `teacher`=1 AND `list_groups` REGEXP \"[[,]".$id_group."[],]\"";

    $result = mysqli_query($link, $query);
    if(!$result)
        return null;
    $temp_arr = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $temp_arr[] = $row;
    }

    mysqli_free_result($result);
    return $temp_arr;
}

/**
 * получение преподавателей, которые преподают конкретный предмет
 * @param $id_group
 * @return array|null
 */
function getTeachersBySubject($id_subject){
    global $link;
    $query = "SELECT `id`,`name`,`surname`,`patronymic`,`email`,`password`,`list_groups`, `list_subjects` FROM `peoples` WHERE `teacher`=1 AND `list_subjects` REGEXP \"[[,]".$id_subject."[],]\"";

    $result = mysqli_query($link, $query);
    if(!$result)
        return null;
    $temp_arr = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $temp_arr[] = $row;
    }

    mysqli_free_result($result);
    return $temp_arr;
}

/**
 * получение преподавателей, которые преподают конкретный предмет в конкретной группе
 * @param $id_group
 * @param $id_subject
 * @return array|null
 */
function getTeachersByGroupAndSubject($id_group, $id_subject){
    global $link;
    $query = "SELECT `id`,`name`,`surname`,`patronymic`,`email`,`password`,`list_groups`, `list_subjects` FROM `peoples` WHERE `teacher`=1 AND `list_groups` REGEXP \"[[,]".$id_group."[],]\" AND `list_subjects` REGEXP \"[[,]".$id_subject."[],]\"";

    $result = mysqli_query($link, $query);
    if(!$result)
        return null;
    $temp_arr = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $temp_arr[] = $row;
    }

    mysqli_free_result($result);
    return $temp_arr;
}

/**
 * вставить препода в базу. параметры массива (`name`,`surname`, `patronymic`,  `email`, `password`, `teacher`, `list_groups`, `list_subjects`)
 * @param $array
 * @return bool|mysqli_result
 */
function insertTeacher($array){
    global $link;
    $sql = "INSERT INTO `peoples` (`name`, `surname`, `patronymic`, `email`, `password`, `teacher`, `list_groups`, `list_subjects`) 
    VALUES ('".$array["name"]."', '".$array["surname"]."',  '".$array["patronymic"]."', '".$array["email"]."', '".$array["password"]."', '1', '".json_encode($array["list_groups"],JSON_NUMERIC_CHECK)."', '".json_encode($array["list_subjects"],JSON_NUMERIC_CHECK)."')";
    $result = mysqli_query($link, $sql);
    return $result;
}

/**
 * редактирование данных препода. структура массива (name,surname,patronymic,email,password,id)
 * @param $array
 * @return bool|mysqli_result
 */
function editTeacherData($array){
    global $link;
    $sql = "UPDATE `peoples` SET `name` = '".$array["name"]."',`surname` = '".$array["surname"]."', `patronymic` = '".$array["patronymic"]."',`email` = '".$array["email"]."', `password` = '".$array["password"]."' 
    WHERE `teacher` = 1 AND `id` = ".$array["id"];
    $result = mysqli_query($link, $sql);
    return $result;
}

/**
 * полное редактирование препода. ЗАГОТОВКА!!! надо редактировать группы и предметы
 * @param $array
 * @return bool|mysqli_result
 */
function editTeacherAll($array){
   /* global $link;
    $sql = "UPDATE `peoples` SET `name` = '".$array["name"]."', `email` = '".$array["email"]."', `password` = '".$array["password"]."'
    WHERE `teacher` = 1 AND `id` = ".$array["id"];
    $result = mysqli_query($link, $sql);
    return $result;*/
}


//////предметы

/**
 * получение предмета изучения
 * @param $id
 * @return string[]|null
 */
function getSubject($id){
    global $link;
    $query = "SELECT `id`,`title`,`description` FROM `subjects` WHERE id=".$id;

    $result = mysqli_query($link, $query);
    if(!$result)
        return null;

    $row = mysqli_fetch_assoc($result);
    mysqli_free_result($result);
    return $row;
}

/**
 * получение всех предметов изучения
 * @return array|null
 */
function getSubjects(){
    global $link;
    $query = "SELECT `id`,`title`,`description` FROM `subjects`";

    $result = mysqli_query($link, $query);
    if(!$result)
        return null;
    $temp_arr = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $temp_arr[] = $row;
    }

    mysqli_free_result($result);
    return $temp_arr;
}

/**
 * получение определенных предметов изучения
 * @return array|null
 */
function getSubjectsCurrent($id_array){
    global $link;
    $query = "SELECT `id`,`title`,`description` FROM `subjects` WHERE `id` IN (".implode(",", $id_array).")";

    $result = mysqli_query($link, $query);
    if(!$result)
        return null;
    $temp_arr = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $temp_arr[] = $row;
    }

    mysqli_free_result($result);
    return $temp_arr;
}

/**
 * вывод чекбоксов предметов изучения
 */
function getSubjectsCheckbox(){
    $array = getSubjects();
    foreach ($array as $value){
        /*
  ["id"]=>  string(1) "2"
  ["title"]=>  string(32) "программирование"
  ["description"]=>  string(146) "изучение логики, различных языков программирования и всего, что для этого нужно"
        */
        echo " <input type=\"checkbox\" name=\"id_subject[]\" value=\"".$value["id"]."\">".$value["title"];
        //можно еще вписать поде дескрипшн, если надо
    }
}



//////группы

/**
 * получение группы со списком предметов, изучаемых в ней
 * @param $id
 * @return string[]|null
 */
function getGroup($id){
    global $link;
    $query = "SELECT `id`,`title`,`description`,`list_subjects` FROM `groups` WHERE `id`=".$id;

    $result = mysqli_query($link, $query);
    if(!$result)
        return null;

    $row = mysqli_fetch_assoc($result);
    $row["array_subjects"] = getSubjectsCurrent(json_decode($row["list_subjects"]));
    mysqli_free_result($result);
    return $row;
}

function viewGroup($array){
    ?>
    <h1><?=$array["title"];?></h1>
    <p style="font-weight: bold;color: red;"><?=$array["description"];?></p>
    <ul style="font-size: small;font-style: italic;background: azure;">
        <?php
        foreach ($array["array_subjects"] as $subject){
            ?>
            <h3><?=$subject["title"];?></h3>
            <p><?=$subject["description"];?></p>
            <?php
        }
        ?>
    </ul>
    <?php
}

/**
 * получение всех групп
 * @return array|null
 */
function getGroups(){
    global $link;
    $query = "SELECT `id`,`title`,`description`,`list_subjects` FROM `groups`";

    $result = mysqli_query($link, $query);
    if(!$result)
        return null;
    $temp_arr = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $temp_arr[] = $row;
    }

    mysqli_free_result($result);
    return $temp_arr;
}

/**
 * вывод групп в выпадающий список
 */
function viewGroupsLikeSelect(){
    $arr_groups = getGroups();
    echo "<option disabled selected>Выберите группу</option>";
    foreach ($arr_groups as $group){
    ?>
        <option value="<?=$group["id"];?>" title="<?=$group["description"];?>"><?=$group["title"];?></option>
    <?php
    }
}

/**
 * вывод всех групп
 */
function viewGroups(){
    $arr_groups = getGroups();
    echo "<ul>";
    foreach ($arr_groups as $group){
        ?>
        <li>
            <h2><?=$group["title"];?></h2>
            <p><?=$group["description"];?></p>
            <p><a href="group.php?group=<?=$group["id"];?>">Подробнее предметы>>></a></p>
        </li>
        <?php
    }
    echo "</ul>";
}

/**получение определенных групп
 * @param $id_array
 * @return array|null
 */
function getGroupsCurrent($id_array){
    global $link;
    $query = "SELECT `id`,`title`,`description`,`list_subjects` FROM `groups` WHERE `id` IN (".implode(",", $id_array).")";

    $result = mysqli_query($link, $query);
    if(!$result)
        return null;
    $temp_arr = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $temp_arr[] = $row;
    }

    mysqli_free_result($result);
    return $temp_arr;
}