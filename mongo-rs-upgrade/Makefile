all: ansible

vagrant:
	vagrant up

ansible: vagrant requirements
	ansible-playbook playbook.yml
	ansible-playbook playbook-m3-up-3.0.yml
	@echo "Should wait m3 to be sync..."
	@sleep 3
	ansible-playbook playbook-m2-up-3.0.yml
	@echo "Should wait m2 to be sync..."
	@sleep 3
	ansible-playbook playbook-m2-primary.yml
	@echo "Should wait m2 to be primary..."
	@sleep 5
	ansible-playbook playbook-m1-up-3.0.yml
	@echo "Should wait m1 to be sync..."
	@sleep 3
	ansible-playbook playbook-m1-primary.yml
	@echo "RS is now in mongo 3.0"

requirements:
	ansible-galaxy install -r requirements.yml

clean:
	vagrant destroy -f
	rm -rf ./roles
	rm -rf ./.vagrant
