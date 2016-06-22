all: ansible

vagrant:
	vagrant box update
	vagrant up

ansible: vagrant requirements
	# Build inital replica-set
	ansible-playbook playbook.yml
	# Upgrade to mongo 3.0 + WT storage
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
	# Upgrade to mongo 3.2
	ansible-playbook playbook-m3-up-3.2.yml
	@echo "Should wait m3 to be sync..."
	@sleep 3
	ansible-playbook playbook-m2-up-3.2.yml
	@echo "Should wait m2 to be sync..."
	@sleep 3
	ansible-playbook playbook-m2-primary.yml
	@echo "Should wait m2 to be primary..."
	@sleep 5
	ansible-playbook playbook-m1-up-3.2.yml
	@echo "Should wait m1 to be sync..."
	@sleep 3
	ansible-playbook playbook-m1-primary.yml
	@echo "RS is now in mongo 3.2"

requirements:
	ansible-galaxy install -r requirements.yml

clean:
	vagrant destroy -f
	rm -rf ./roles
	rm -rf ./.vagrant
