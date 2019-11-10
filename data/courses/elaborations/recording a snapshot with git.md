## Recording a snapshot with Git

- Git takes snapshots only if we request it.
- We will record changes always in two steps (we will later explain why this is a recommended practice):

```shell
$ :::point git add a file
$ :::point git commit

$ :::point git add multiple files
$ :::point git commit
```

- We first focus (`git add`, we "stage" the change), then shoot (`git commit`):

![Git staging]({{ site.baseurl }}/img/git_stage_commit.svg
"git staging and committing"){:class="img-responsive" style="max-width:70%"}

- For the more advanced users: What do you think will be the outcome if you stage a file and then edit it and stage it again, do this
several times and at the end perform a commit? (think of focusing several scenes and pressing the shoot
button only at the end)
