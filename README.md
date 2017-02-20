# Jora
Jora is a item tracker that is just about right. Not bad - but not awesome either. Jora is the adequate issue tracker.

>An id to hang your ideas on

## Rationale for Jora
We think that stickies on a board is a great way to visualize the state of work - an information radiator in the room that you are working in. Putting all that visualized data in a computer - aka information refrigerator -  defies some of the purpose of visualization: keeping the information in your face, tactile and easily manageable. Yes - even if that system has a nice board feature that can be used on a big screen that is always on.

However there's a lot of information being generated as you work with an item that cannot easily stick to the sticky on the board; discussions, screen shots, diagrams, formulas and work-logs for example. That is great to have in a computer system that we can pull out of the refrigerator when we need it. All we need is a little reference between the sticky on the board and the information in the computer system.

Many systems does that not... but they do so much more. There's workflows, board configuration, access management, reports, restrictions in how each of these components can be handled and visualized etc. Some of these tools are really amazing works of engineering and art that can do amazing things. We love some of them and ... do not love others as much.

Jora is just simple. It's basically just an id where you can track data on. There's no workflow, reporter, assigne, state, time tracking, type of work, grouping of work, or board even.

It's just the id and some very simple open fields for you to reference the data for.

## Our philosophy
Whooa - that pretty big words for such a small project... This is just some ideas - nothing big and important.

Well we want to try to do something that we call API-first; meaning we focus primarily on the API and let the clients become an interesting side effect. Sure clients are needed to interact with jora but really we did the API first.

Secondly, more as an experimental joke, we really want to embrace the *jora*-mindset. Jora is a Swedish slang word meaning that things are ok. Here's a typical use in a conversation.

>How are you doing?
>Jora - it's ok.

She's ok. She's not bad, but not good. It's just that it's not even interesting to talk about what doesn't make her feel great. It's better than "Meh!", but not good by any means.

We will build this to the *jora*-level. We don't aim to be awesome or good even, but it cannot be bad either.

## Data model
Jora... this is not much to talk about really, but basically there's two entities that we care about:

* **Projects** - which just is a grouping of items really. There is probably a name for this, or at least a slug.
* **Items** - which is the thing that you store information on - represented by a sticky on you physical board. For starters it will have:
    - an id (**the** id)
    - a summary or title
    - a description

Futher versions of the item might hold:
    - label(s)
    - worklog
    - discussions
    - attachments
    - links to other items

## What is in here really?
For now we just have a few ideas on what could be nice to have. Remember our philosophy from above.

But you'll find these initial ideas here:

| idea, service, component     |  description |
| --------------------------- | ---------------------------------------- |
| [jora-api](/jora-api)       | our main api                             |
| [jora-cli](/jora-cli)       | a console integration                    |
| [jora-web](/jora-web)       | an adequate web client                   |
| [jora-canvas](/jora-canvas) | a very simple canvas that let's you place the items in a space, should really really need a electronic board |
| [jora-slack](/jora-slack)   | a simple slack integration               |

There might be more and we'll probably kill a few of these off too...

### One repo? Why?

1. It's very simple. It's ... jora
2. Daniel wants it - he's the youngest so we let him decide
3. [Google does it for all their stuff](https://www.youtube.com/watch?v=W71BTkUbdqE) so it might work

## Is this a real thing?
No, not yet… but it might be. We'll see
