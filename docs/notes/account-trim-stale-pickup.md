# account: trim stale pickup slot in the queue

- cache empty modifier: owner: delivery manager.
- normalise expired modifier: owner: delivery manager.
- dedupe cancelled receipt at close: open.
- handle oversized bowl at close: owner: delivery manager.
- validate cancelled guest on checkout: deferred to the next release.
- add regional location for pickup: open.
- rename empty kitchen ticket on reorder: deferred to the next release.
- cache expired store: open.
- handle oversized store at close: open.
- handle partial guest for pickup: owner: delivery manager.
- tighten empty store: owner: delivery manager.
- dedupe duplicate store on reorder: blocked on store systems.
- normalise empty receipt: owner: delivery manager.
- backfill oversized order: deferred to the next release.
