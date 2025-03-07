---
id: hosting-variations
title: Hosting Variations
---

This article aims to provide cost estimates for hosting based on your specific requirements, such as the number of chats per day or operators. It is intended for DevOps engineers who need to estimate the required reliability and associated costs.

**Important Notices**

*   Pricing is based on DigitalOcean's pricing as of **2021-02-12**, the date this article was written.
*   If you run out of disk space, you can attach [Volumes](https://www.digitalocean.com/products/block-storage/) to the `/var` folder.
*   You are responsible for paying all hosting invoices directly. You will need to add us as project members to facilitate support.

## Commercial Support Costs

*   Installation fee for A.1 - A.3: 240 EUR
*   Installation fee for A.4 - A.5: 320 EUR
*   Installation fee for B.1 - B.3: 540 EUR
*   Installation fee for D.1 - D.3: 540 EUR
*   Installation fee for C.1 - C.3: 450 EUR
*   Installation fee for C.1 - C.3: 600 EUR (for Database Master-Master replication failover)
    *   Hosting costs are identical to the C calculations, except the database/redis portion costs 2x:
        *   C1: 85$ changes to 125$
        *   C2: 135$ changes to 175$
        *   C3: 235$ changes to 315$ (200$ cheaper per month than D.3, which is an identical setup)
*   Automatic updates and monthly support (up to 3 hours): 120 EUR/month. Additional hours are billed at 35 EUR/hour unless otherwise agreed.
*   On-demand support is available at a standard fee of 35 EUR/hour. You are responsible for server maintenance, and we will not be monitoring resources.
*   Once the system is live, resource requirements depend heavily on how the customer integrates the widget, including factors like proactive invitations and online/offline status checks. These can significantly impact hosting resource needs.

## Example 1. Production example of real world hosting. 

* 10K chats per day
  * 4.5K chats served by operators
  * 6.5K served by a bot without operator involvement.
* Operators
  * There is around 20 operators online at any single given moment.
  * Operator can have maximum of 3 chats

These are virtual linux machines

* OS - Centos
* Web server (nginx, php-fpm, redis, nodejshelper, php-resque)
    * 6TH, Intel(R) Xeon(R) CPU E5-2670 0 @ 2.60GHz
    * Memory 8GB
* DB Server 
    * Memory 8GB
    * 8TH, Intel(R) Xeon(R) CPU E5-2670 0 @ 2.60GHz
* ElasticSearch
    * Used for statistic generation. I don't have exact server specification, but I think something like Web server it should be.

## Example 2. Production example of real world hosting.

* 3K - 4K chats per day
* Around 5-10 operators online

There is only one linux machine. This amount of chats should handle server also with 2x less resources than it has now.

* OS - Centos
* Web and database are on the same server. (nginx, php-fpm, redis, php-resque)
    * CPU - 8 Threads. Intel(R) Xeon(R) D-2123IT CPU @ 2.20GHz
    * Memory - 32GB
* Disk HDD - it's biggest disadvantage of this server as it does not have SSD disks.
* Migration from Windows server took 6h - 8h

Migration was done from Windows server. Client had integration with third party API where request were send to third party API within each message send from operator. It was the biggest issue (API call was taking long time and blocking php-fpm process worker). This task was moved to php-resque.

## Without load balancers

These combinations are for the one who wants to host knowing that if one instance goes down, the whole chat down. For these setups you can just use https://marketplace.digitalocean.com/apps/live-helper-chat

In all cases I suggest having running

 * (NodeJS-Helper Extensions)[https://github.com/LiveHelperChat/NodeJS-Helper], install estimation 2h-3h
 * (lhc-php-resque) extension[https://github.com/LiveHelperChat/lhc-php-resque], install estimation 2h-3h
 * Cronjobs should be setup on web servers

### A.1 Variant

< 500 chats per day 1-2 operators online

Database and server is the same VPS

| Memory | vCPUs | Transfer | SSD Disk | $/HR | $MO
| --- | --- | --- | --- | --- | --- |
| 2GB | 1vCPUs | 2TB | 50GB | $0.015 | $10

More powerful combination would be just go with this instance

| Memory | vCPUs | Transfer | SSD Disk | $/HR | $MO
| --- | --- | --- | --- | --- | --- |
| 2GB | 2vCPUs | 3TB | 60GB | $0.022 | $15

Total cost - **$15**

### A.2 Variant

500 - 1000 chats per day 2-4 operators online

Database and server is the same VPS

| Memory | vCPUs | Transfer | SSD Disk | $/HR | $MO
| --- | --- | --- | --- | --- | --- |
| 4GB | 2vCPUs | 4TB | 80GB | $0.030 | $20

Total cost - **$20**

### A.3 Variant

3000 - 5000 chats per day 4-7 operators online

Database and server is the same VPS

| Memory | vCPUs | Transfer | SSD Disk | $/HR | $MO
| --- | --- | --- | --- | --- | --- |
| 8GB | 4vCPUs | 5TB | 160GB | $0.060 | $40

Total cost - **$40**

### A.4 Variant

5000 - 10000 chats per day 8 - 20 operators online

Personally I would go with two instances. If you see that in one of them load is to big I would add more resources to it.

**Web**

| Memory | vCPUs | Transfer | SSD Disk | $/HR | $MO
| --- | --- | --- | --- | --- | --- |
| 8GB | 4vCPUs | 5TB | 160GB | $0.060 | $40

**Database**

| Memory | vCPUs | Transfer | SSD Disk | $/HR | $MO
| --- | --- | --- | --- | --- | --- |
| 8GB | 4vCPUs | 5TB | 160GB | $0.060 | $40

Total cost - **$80**

### A.5 Variant

10 000 > chats per day 20 > operators online

**Web**

| Memory | vCPUs | Transfer | SSD Disk | $/HR | $MO
| --- | --- | --- | --- | --- | --- |
| 16GB | 8vCPUs | 6TB | 320GB | $0.119 | $80

**Database**

| Memory | vCPUs | Transfer | SSD Disk | $/HR | $MO
| --- | --- | --- | --- | --- | --- |
| 16GB | 8vCPUs | 6TB | 320GB | $0.119 | $80

Total cost - **$160**

## With load balancer, without fail over nodes for Database, Redis (Redis, MySQL hosted by DigitalOcean provided service)

These combinations have single point of failure - Databases (Redis/MySQL) (because there are no fail over nodes in these configurations)

* If DigitalOcean managed databse Redis/MySQL goes down whole chat goes down.
* If web server goes down, chat still will be working
* To have php-sessions working across instances we will use Redis service provided by DigitalOcean
* Database we will use also DigitalOcean provided service.

### B.1

(1000 - 3000 chats per day)

**Redis** - will be used for php sessions, php-resque, and as NodeJS transport layer.

More info - https://www.digitalocean.com/pricing/#managed-databases

| Memory | vCPUs | Disk | Standby Nodes | $/HR | $MO
| --- | --- | --- | --- | --- | --- |
| 1GB | 1vCPUs | 10GB | N/A | 	$0.022 | $15

**Load Balancer**

Small $10/ month 

More info - https://www.digitalocean.com/pricing/#load-balancers

**MySQL Database**

| Memory | vCPUs | Disk | Standby Nodes | $/HR | $MO
| --- | --- | --- | --- | --- | --- |
| 4GB | 2vCPUs | 38GB | 0 | 	$0.089 | $60

More info - https://www.digitalocean.com/pricing/#managed-databases

**Web**

Two instances of

| Memory | vCPUs | Transfer | SSD Disk | $/HR | $MO
| --- | --- | --- | --- | --- | --- |
| 2GB | 2vCPUs | 3TB | 60GB | $0.022 | $15

Total costs for this setup

**Volumes**

We will need volumes that all files uploaded by operators and visitor would be accessible by all running droplets

50GB - $5

#### Total cost

Total cost for the hosting

Total cost - **$15 + $10 + $60 + $15 + $15 + 4$ = 120$**

### B.2 

(3000 - 6000 chats per day)

**Redis** - will be used for php sessions, php-resque, and as NodeJS transport layer.

More info - https://www.digitalocean.com/pricing/#managed-databases

| Memory | vCPUs | Disk | Standby Nodes | $/HR | $MO
| --- | --- | --- | --- | --- | --- |
| 1GB | 1vCPUs | 10GB | N/A | 	$0.022 | $15

**Load Balancer**

Small $10/ month

More info - https://www.digitalocean.com/pricing/#load-balancers

**MySQL Database**

It always possible to go with smaller one and increase afterward.

| Memory | vCPUs | Disk | Standby Nodes | $/HR | $MO
| --- | --- | --- | --- | --- | --- |
| 8GB | 4vCPUs | 115GB | 0 | 	$0.179 | $120

**Web**

Two instances of

| Memory | vCPUs | Transfer | SSD Disk | $/HR | $MO
| --- | --- | --- | --- | --- | --- |
| 4GB | 2vCPUs | 4TB | 80GB | $0.030 | $20

**Volumes**

We will need volumes that all files uploaded by operators and visitor would be accessible by all running droplets

50GB - $5

Total costs for this setup

Total cost - **$15 + $10 + $120 + $20 + $20 + 5 = 185$**

### B.3

(6000 > chats per day)

**Redis** - will be used for php sessions, php-resque, and as NodeJS transport layer.

More info - https://www.digitalocean.com/pricing/#managed-databases

| Memory | vCPUs | Disk | Standby Nodes | $/HR | $MO
| --- | --- | --- | --- | --- | --- |
| 2GB | 1vCPUs | 25GB |0 | 	$0.045 | $30

**Load Balancer**

Small $30/ month

More info - https://www.digitalocean.com/pricing/#load-balancers

**MySQL Database**

It always possible to go with smaller one and increase afterward.

| Memory | vCPUs | Disk | Standby Nodes | $/HR | $MO
| --- | --- | --- | --- | --- | --- |
| 16GB | 6vCPUs | 270GB | 0 | 	$0.357 | $240

**Web**

Two instances of

| Memory | vCPUs | Transfer | SSD Disk | $/HR | $MO
| --- | --- | --- | --- | --- | --- |
| 8GB | 4vCPUs | 5TB | 160GB | $0.060 | $40

**Volumes**

We will need volumes that all files uploaded by operators and visitor would be accessible by all running droplets

50GB - $5

Total costs for this setup

Total cost - **$30 + $30 + $240 + $40 + $40 + $5 = 385$**

## With load balancer, without fail over nodes for Database, Redis (Redis, MySQL hosted on a single Droplet)

These combinations have single point of failure - Databases (Redis/MySQL) (because there are no fail over nodes in these configurations)

It's possible to eliminate single point of failure by implementing replications for the databases. See commercial support costs section.

Instead of using DigitalOcean provided services we will configure and use our own configured droplet for cost optimisations reasons.

* To have php-sessions working across instances we will use Redis
* Database will be hosted on the same Droplet

### C.1

(1000 - 3000 chats per day)

**MySQL Database and Redis**

| Memory | vCPUs | Transfer | SSD Disk | $/HR | $MO
| --- | --- | --- | --- | --- | --- |
| 8GB | 4vCPUs | 5TB | 160GB | $0.060 | $40

**Load Balancer**

Small $10/ month

More info - https://www.digitalocean.com/pricing/#load-balancers

**Web**

Two instances of

| Memory | vCPUs | Transfer | SSD Disk | $/HR | $MO
| --- | --- | --- | --- | --- | --- |
| 2GB | 2vCPUs | 3TB | 60GB | $0.022 | $15

Total costs for this setup

**Volumes**

We will need volumes that all files uploaded by operators and visitor would be accessible by all running droplets

50GB - $5

#### Total cost

Total cost - **$40 + $10 + $15 + $15 + $5 = $85**

### C.2

(3000 - 6000 chats per day)

**MySQL Database and Redis**

| Memory | vCPUs | Transfer | SSD Disk | $/HR | $MO
| --- | --- | --- | --- | --- | --- |
| 8GB | 4vCPUs | 5TB | 160GB | $0.060 | $40

**Load Balancer**

Small $10/ month

More info - https://www.digitalocean.com/pricing/#load-balancers

**Web**

Two instances of

| Memory | vCPUs | Transfer | SSD Disk | $/HR | $MO
| --- | --- | --- | --- | --- | --- |
| 8GB | 4vCPUs | 5TB | 160GB | $0.060 | $40

Total costs for this setup

**Volumes**

We will need volumes that all files uploaded by operators and visitor would be accessible by all running droplets

50GB - $5

#### Total cost

Total cost - **$40 + $10 + $40 + $40 + $5 = $135**

### C.3

(6000 > chats per day)

**MySQL Database and Redis**

| Memory | vCPUs | Transfer | SSD Disk | $/HR | $MO
| --- | --- | --- | --- | --- | --- |
| 16GB | 8vCPUs | 6TB | 320GB | $0.119 | $80

**Load Balancer**

Small $30/ month

More info - https://www.digitalocean.com/pricing/#load-balancers

**Web**

Three instances of

| Memory | vCPUs | Transfer | SSD Disk | $/HR | $MO
| --- | --- | --- | --- | --- | --- |
| 8GB | 4vCPUs | 5TB | 160GB | $0.060 | $40

Total costs for this setup

**Volumes**

We will need volumes that all files uploaded by operators and visitor would be accessible by all running droplets

50GB - $5

#### Total cost

Total cost - **$80 + $30 + $40 + $40 + $40 + $5 = $235**


## With load balancer, with fail over nodes for Database, Redis (Redis, MySQL hosted by DigitalOcean provided service)

In these configurations there is no single point of failure.

* To have php-sessions working across instances we will use Redis service provided by DigitalOcean
* Database we will use also DigitalOcean provided service.

### D.1

(1000 - 3000 chats per day)

**Redis** - will be used for php sessions, php-resque, and as NodeJS transport layer.

More info - https://www.digitalocean.com/pricing/#managed-databases

| Memory | vCPUs | Disk | Standby Nodes | $/HR | $MO
| --- | --- | --- | --- | --- | --- |
| 2GB | 1vCPUs | 25GB | 1 | 	$0.074 | $50

**Load Balancer**

Small $10/ month

More info - https://www.digitalocean.com/pricing/#load-balancers

**MySQL Database**

| Memory | vCPUs | Disk | Standby Nodes | $/HR | $MO
| --- | --- | --- | --- | --- | --- |
| 4GB | 2vCPUs | 38GB | 1 | 	$0.149 | $100

More info - https://www.digitalocean.com/pricing/#managed-databases

**Web**

Two instances of

| Memory | vCPUs | Transfer | SSD Disk | $/HR | $MO
| --- | --- | --- | --- | --- | --- |
| 2GB | 2vCPUs | 3TB | 60GB | $0.022 | $15

Total costs for this setup

**Volumes**

We will need volumes that all files uploaded by operators and visitor would be accessible by all running droplets

50GB - $5

#### Total cost

Total cost for the hosting

Total cost - **$50 + $10 + $100 + $15 + $15 + $5 = $195**

### D.2

(3000 - 6000 chats per day)

**Redis** - will be used for php sessions, php-resque, and as NodeJS transport layer.

More info - https://www.digitalocean.com/pricing/#managed-databases

| Memory | vCPUs | Disk | Standby Nodes | $/HR | $MO
| --- | --- | --- | --- | --- | --- |
| 2GB | 1vCPUs | 25GB | 1 | 	$0.074 | $50

**Load Balancer**

Small $10/ month

More info - https://www.digitalocean.com/pricing/#load-balancers

**MySQL Database**

It always possible to go with smaller one and increase afterward.

| Memory | vCPUs | Disk | Standby Nodes | $/HR | $MO
| --- | --- | --- | --- | --- | --- |
| 8GB | 4vCPUs | 115GB | 1 | 	$0.298 | $200

**Web**

Two instances of

| Memory | vCPUs | Transfer | SSD Disk | $/HR | $MO
| --- | --- | --- | --- | --- | --- |
| 4GB | 2vCPUs | 4TB | 80GB | $0.030 | $20

**Volumes**

We will need volumes that all files uploaded by operators and visitor would be accessible by all running droplets

50GB - $5

Total costs for this setup

Total cost - **$50 + $10 + $200 + $20 + $20 + $5 = $305**

### D.3

(6000 > chats per day)

**Redis** - will be used for php sessions, php-resque, and as NodeJS transport layer.

More info - https://www.digitalocean.com/pricing/#managed-databases

| Memory | vCPUs | Disk | Standby Nodes | $/HR | $MO
| --- | --- | --- | --- | --- | --- |
| 2GB | 1vCPUs | 25GB | 1 | 	$0.074 | $50

**Load Balancer**

Small $30/ month

More info - https://www.digitalocean.com/pricing/#load-balancers

**MySQL Database**

It always possible to go with smaller one and increase afterward.

| Memory | vCPUs | Disk | Standby Nodes | $/HR | $MO
| --- | --- | --- | --- | --- | --- |
| 16GB | 6vCPUs | 270GB | 1 | 	$0.595 | $400

**Web**

Two instances of

| Memory | vCPUs | Transfer | SSD Disk | $/HR | $MO
| --- | --- | --- | --- | --- | --- |
| 8GB | 4vCPUs | 5TB | 160GB | $0.060 | $40

**Volumes**

We will need volumes that all files uploaded by operators and visitor would be accessible by all running droplets

50GB - $5

Total costs for this setup

Total cost - **$30 + $30 + $400 + $40 + $40 + $5 = $545**
