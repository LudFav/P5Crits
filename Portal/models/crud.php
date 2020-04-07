<?php

namespace CritsPortal\models;

interface crud
{
/**
 * public function create
 * Fonction servant à insérer une entité dans la base de donné.
 * @param [string] $table
 * @param array $data
 *
 */
   public function create($table, $data);


/**
 * public function readAll
 * Fonction servant à lire toutes les entités enregistrées 
 * dans la base de donné.
 * @param [string] $table
 * @param [object] $obj
 * @param [int] $page
 * @param [int] $entiteParPage
 * 
 */
    public function readAll($table, $obj, $page, $entiteParPage);


/**
 * public function readOne
 * Fonction servant à lire une entité enregistré dans la base de donné.
 * @param [string] $table
 * @param [object] $obj
 * @param [int] $entiteParPage
 * 
 */
    public function readOne($table, $obj, $id);


/**
 * public function update
 * Fonction permettant l'edition d'une entité enregistrée
 * dans la base de donnée.
 * @param [string] $table
 * @param [array] $data
 * @param [string] $where
 * 
 */
    public function update($table, $data, $where);


/**
 * public function delete
 * Fonction permettant la supression d'une entité dans la base de donnée.
 * @param [string] $table
 * @param [string] $where
 *
 */
    public function delete($table, $where);
}
