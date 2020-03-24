---
id: statistic
title: Statistic
sidebar_label: Statistic
---

If you have large number of chats I would suggest to use ElasticSearch plugin for statistic generation. In any case with relative small number of chats default functionality also works. Here are all charts you can generate.

## Statistic

Main statistic tab. These charts are grouped by month by default. If you want grouping by day use `Chats statistic` tab.

### Chat numbers by status

Usefull to see general number of chats.

![](/img/statistic/chats-numbers-by-status.jpg)


### Unanswered chat numbers

If visitor writes a message and chat is pending. Chat becomes unanswered.

![](/img/statistic/unanswered.jpg)

### Message types

Let's you see what types of messages were most popular.

![](/img/statistic/message-types.jpg)

### Number of Thumbs Up/Down

Displays what operators received most thumbs up
![](/img/statistic/thumbs-up.jpg)

Displays what operators received most thumbs down
![](/img/statistic/thumbs-down.jpg)

### Average number of chats & peak per hour

Shows maximum chats per hour logged.

![](/img/statistic/peak-chats-per-hour.jpg)

### Number of chats per hour, average chat duration 08 m. 32 s.

Shows total number of chats logged per hour for selected period. In this case it was for two weeks.

![](/img/statistic/chats-per-hour.jpg)

### Number of chats by department

This way you can know which department had largest number of chats.

![](/img/statistic/chats-by-department.jpg)

### Unique group field records grouped by date

Unique nick's grouped by date. With extension you can add more fields you would like to group by.

![](/img/statistic/unique-records.jpg)

### Proactive chats number vs visitors initiated

From this chart you can see how many chats were initiated by proactive invitation and how many started by a visitor.

![](/img/statistic/proactive-vs-visitor-initiated.jpg)

### Number of chats by country

![](/img/statistic/chats-by-country.jpg)

### Average wait time in seconds (maximum of 10 minutes)

Wait time being calculated by how long visitor waiting for chat becoming active after it became pending.

![](/img/statistic/average-wait-time.jpg)

### AVG visitor wait time by operator

You can see which operator is accepting chats with delay once chat being assigned to hom for example. If queue is big chat in any case would have longer wait time.

![](/img/statistic/wait-time-by-operator.jpg)

### Chats number grouped by date and group field

In this chart, if you group by nick, you can see what visitor chatted the most. If you do not allow visitor enter nick and prefill it's good way to know what visitor had biggest number of chats.

![](/img/statistic/group-by-nick-date.jpg)

### Number of chats by subject

If you are using subjects later you can generate graph like this.

![](/img/statistic/chats-by-subject.jpg)

### Number of messages by user

You can see what operator had send biggest number of message for selection period of time.

![](/img/statistic/messages-by-operator.jpg)

### Number of chats by user

You can see what operator had biggest number of chats for selection period. 0 in this chart means bot. So you can see how many chats were served directly by bot.

![](/img/statistic/chats-by-opeator.jpg)

### Average chat duration by user in seconds

You can see what operator takes longest time chatting with visitor. It means that his performance can be improved. This report can be downloaded also.

![](/img/statistic/chat-duration-by-operator.jpg)

## Chats statistic

The main difference between above chats and charts in `Chats statistic` section charts in this section is can be grouped by day.

### Chat numbers by status

![](/img/statistic/chats-by-day.jpg)

## Total statistic

It's lifetime statistic. If you are using archive functionality. This statistic does not include chats from archives.

![](/img/statistic/total-statistic.jpg)

## Last 24h statistics

You can get basic last 24 hours statistic in this section.

![](/img/statistic/last-24-hours.jpg)

## Agents statistic

![](/img/statistic/operators-statistic.jpg)

Clicking on `Time online (sum of time spend online)` will give you log of operator online/offline time.

![](/img/statistic/online-offline-time.jpg)

## Performance

This will represent general performance and will let you know how many chats were abandoned before they even got accepted.

![](/img/statistic/general-performance.jpg)

## Departments

If you have running [department availability cronjob](development/cronjob.md#department-availability-cronjob) you will be able to generate this chart.

![](/img/statistic/department-stats.jpg)

## Visitors

These charts can take really long to generate so make sure you choose quite short period of time day/week.

### Cities

![](/img/statistic/visitors-city.jpg)

### Countries

![](/img/statistic/visitors-country.jpg)

### New visitors

![](/img/statistic/new-visitors.jpg)

### Returning visitors

![](/img/statistic/returning-visitors.jpg)

## Pending VS Online

This chart is available only if you are using ElasticSearch

![](/img/statistic/pending-vs-online.jpg)

## Configuration

In this section you can choose what charts should be checked by default for generation.

![](/img/statistic/charts-configuration.jpg)
