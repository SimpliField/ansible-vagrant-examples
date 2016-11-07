#
# see https://gist.github.com/dmsimard/cd706de198c85a8255f6

from __future__ import (absolute_import, division, print_function)
__metaclass__ = type

from ansible.plugins.callback import CallbackBase
try:
    import simplejson as json
except ImportError:
    import json

# Fields to reformat output for
FIELDS = ['cmd', 'command', 'start', 'end', 'delta', 'msg', 'stdout',
          'stderr', 'results']

class CallbackModule(CallbackBase):
    def task_json(self, data):
        print("task_json");
        if type(data) == dict:
            for field in FIELDS:
                if field in data.keys() and data[field]:
                    output = self._format_output(data[field])
                    print("\n{0}: {1}".format(field, output.replace("\\n","\n")))

    def _format_output(self, output):
        print("format output\n");
        return json.dumps(output, indent=2)

    def playbook_on_start(self, host, res):
        self.task_json(res)

    def runner_on_ok(self, host, res):
        self.task_json(res)

    def runner_on_failed(self, host, res, ignore_errors=False):
        self.task_json(res)
