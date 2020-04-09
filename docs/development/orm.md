---
id: orm
title: Object-relational mapping
sidebar_label: ORM
---

## Introduction

This is short guide to main Live Helper Chat classes and how to fetch data from database.

Live Helper for work with database is usign [Zeta Componetns](http://zetacomponents.org/documentation/trunk/Database/tutorial.html) I know they are old, but I started this project over 10 years ago. Although I still can do everything I want.

All Live Helper Chat classes working with database are located at

> https://github.com/LiveHelperChat/livehelperchat/tree/master/lhc_web/pos

Their classes are located at

> https://github.com/LiveHelperChat/livehelperchat/tree/master/lhc_web/lib/models

Al-most all classes which works with database uses [`erLhcoreClassDBTrait`](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/lib/core/lhcore/lhdbtrait.php). See there what methods are available.


## Most common methods

```php

try {
    // Begin transaction
    $db = ezcDbInstance::get();
    $db->beginTransaction();
        
    // Save/Update new object
    $chat = new erLhcoreClassModelChat();
    $chat->saveThis();

    // Change attribute
    $chat->nick = 'Live Helper Chat';

    // Update only update field
    $Chat->saveThis(array('update' => array('nick')));

    // Update all fields
    $Chat->saveThis();

    // Sync record and lock it
    $chat->syncAndLock();    

    // Delete object
    $chat->removeThis();
    
    // Fetch by primary key
    erLhcoreClassModelChat::fetch(1);
    
    // Fetch and lock record
    erLhcoreClassModelChat::fetchAndLock(1);
    
    // Search by department
    // For all filtering options see filter examples
    erLhcoreClassModelChat::getList(['limit' => 5, 'offset' => 5, 'filter' => ['dep_id' => 5]]);

    // Get number of records
    erLhcoreClassModelChat::getCount(['limit' => 5, 'offset' => 5, 'filter' => ['dep_id' => 5]]);

    $db->commit();

} catch (Exception $e) {
    $db->rollback();
}


// Direct query
$stmt = $db->prepare("SELECT id FROM lh_users_online_session WHERE user_id = :user_id AND lactivity > :lactivity_back");
$stmt->bindValue(':user_id',$this->userid,PDO::PARAM_INT);
$stmt->bindValue(':lactivity_back',time()-40,PDO::PARAM_INT);
$stmt->execute();

// If you are just updating somethibng you can skip this part.
$id = $stmt->fetch(PDO::FETCH_COLUMN); // Change how fetch should work.

```

## Filtering options

`<className>::getList` and `<className>::getCount` supports following arguments. See [conditions](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/lib/core/lhcore/lhdbtrait.php#L352) method.

```php
['filter' => ['column' => 'required_value']]; // `column` = 'required_value'

['filterin' => ['column' => [1,2]]]; // `column` IN (1,2)

['filterlt' => ['column' => 5]]; // `column` < 5

['filtergt' => ['column' => 5]]; // `column` > 5

['filtergte' => ['column' => 5]]; // `column` >= 5

['filterlte' => ['column' => 5]]; // `column` <= 5

['filternot' => ['column' => 'lhc']]; // `column` != 'lhc'

['filterlike' => ['column' => 'lhc']]; // `column` LIKE ('%lhc%')

['filterlikeright' => ['column' => 'lhc']]; // `column` LIKE ('lhc%')

['filterlikeright' => ['column' => 'lhc']]; // `column` LIKE ('lhc%')

['filternotin' => ['column' => [1,2]]]; // `column` NOT IN (1,2)

```