<?php

interface crud {

    public function create($table, $data);

    public function readAll($table, $obj, $page, $entiteParPage);

    public function readOne($table, $obj, $id);

    public function update($table, $data, $where);

    public function delete($table, $where);

}