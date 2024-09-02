# Fluxo Gitflow para Desenvolvimento

Este documento descreve a implementação do fluxo Gitflow para gerenciamento de ramificações em projetos de desenvolvimento. O Gitflow é uma estratégia eficaz para organizar o trabalho em equipe e manter um controle claro sobre o desenvolvimento e releases de software.

## Estrutura de Ramificações

O Gitflow utiliza as seguintes ramificações principais e de suporte:

### Ramificações Principais

- **`main` (ou `master`)**  
  Esta é a ramificação de produção. O código nesta branch deve ser sempre estável e pronto para ser liberado para os usuários finais. Somente o código testado e aprovado deve ser mesclado aqui.

- **`develop`**  
  Esta ramificação é onde o desenvolvimento ativo ocorre. Novas funcionalidades, melhorias e correções são integradas aqui. Quando a ramificação `develop` estiver pronta para uma nova release, ela será mesclada com `main`.

### Ramificações de Suporte

- **Feature Branches**  
  Ramificações criadas a partir de `develop` para desenvolver novos recursos ou alterações específicas. Após a conclusão, a branch de feature deve ser mesclada de volta em `develop`.  
  **Nomeação**: `feature/nome-da-feature`

  **Uso**: Permite que os desenvolvedores trabalhem em novas funcionalidades sem afetar o código principal.  
  **Exemplo**: `feature/login-autenticacao`

- **Release Branches**  
  Criadas a partir de `develop` quando um conjunto de funcionalidades está pronto para ser lançado. Permite a preparação final e correções menores antes da release. Após a conclusão, a branch de release deve ser mesclada em `main` e `develop`.  
  **Nomeação**: `release/nome-da-release`

  **Uso**: Facilita o processo de lançamento e permite ajustes finais sem interromper o desenvolvimento contínuo.  
  **Exemplo**: `release/v1.0.0`

- **Hotfix Branches**  
  Criadas a partir de `main` para corrigir rapidamente problemas críticos encontrados em produção. Após a correção, a branch de hotfix deve ser mesclada em `main` e `develop`.  
  **Nomeação**: `hotfix/nome-do-hotfix`

  **Uso**: Permite correções rápidas e críticas de bugs em produção.  
  **Exemplo**: `hotfix/corrigir-bug-critico`

## Fluxo de Trabalho

### 1. Criação de uma Nova Feature

1. Crie uma nova branch a partir de `develop`:
   ```bash
   git checkout -b feature/nome-da-feature develop
   ```
2. Desenvolva a nova feature e realize testes locais.
3. Mescle a branch de feature de volta em develop:
   ```bash
   git checkout develop
   git merge feature/nome-da-feature
   git push origin develop
   ```

### 2. Preparação para Release

1. Crie uma branch de release a partir de develop:
   ```bash
   git checkout -b release/v1.0.0 develop
   ```
2. Realize testes finais e ajustes na branch de release.
3. Mescle a branch de release em main e develop:

   ```bash
   git checkout main
   git merge release/v1.0.0
   git push origin main

   git checkout develop
   git merge release/v1.0.0
   git push origin develop
   ```

   4. Delete a branch de release após o merge.

### 3. Correção de Bugs em Produção (Hotfix)

1. Crie uma branch de hotfix a partir de main:
   ```bash
   git checkout -b hotfix/corrigir-bug-critico main
   ```
2. Implemente e teste a correção na branch de hotfix.

3. Mescle a branch de hotfix em main e develop:

   ```bash
   git checkout main
   git merge hotfix/corrigir-bug-critico
   git push origin main

   git checkout develop
   git merge hotfix/corrigir-bug-critico
   git push origin develop
   ```

4. Delete a branch de hotfix após o merge.

## Vantagens do Gitflow para um Pequeno Time

### Organização Clara:

Separação de funcionalidades, releases e hotfixes para um gerenciamento mais organizado.

### Facilita a Colaboração:

Permite que múltiplos desenvolvedores trabalhem simultaneamente sem interferência.

### Estabilidade em Produção:

Mantém a integridade do código na ramificação main.

### Flexibilidade:

Adapta-se a diferentes ritmos e necessidades de desenvolvimento.
