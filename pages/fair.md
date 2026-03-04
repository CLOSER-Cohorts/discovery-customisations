<div class="row">
  <div class="col-sm-8">

  <h1><b> FAIR-ready Infrastructure</b></h1>
  <p>  </p>
  <h2> <b> What is FAIR?</b></h2>
  <p>
    FAIR is an internationally recognised set of principles that guide how
    research data should be managed so that it can be easily <strong>Findable,
    Accessible, Interoperable, and Reusable</strong>. These principles were
    originally defined by a consortium of academic and professional contributors in a 2016 Scientific Data article <a href="https://www.nature.com/articles/sdata201618" target="_blank">"FAIR Guiding Principles for scientific data management and stewardship"</a>. 
  </p>

  <p>The importance of FAIR lies in ensuring that research data can be understood, trusted, and meaningfully reused both now and in the future. Achieving this begins with the comprehensive description of data through rich, accurate, and unambiguous metadata. The metadata enables research to be reproducible and allows datasets from different studies and domains to be combined and interpreted reliably. In addition, using standards is crucial for achieving interoperability and ensuring long-term sustainability. </p>

The following outlines the FAIR principles as published by <a href="https://www.go-fair.org/fair-principles/" target="_blank">GO FAIR</a> and describes how CLOSER Discovery aligns with, and implements them.

  <h2> <b> How is CLOSER Discovery FAIR?</b></h2>


  <h2><b>Findable</b></h2>
  <blockquote>
    “The first step in (re)using data is to find them. Metadata and data should
    be easy to find for both humans and computers. Machine-readable metadata are
    essential for automatic discovery of datasets and services.”
  </blockquote>

  <b> F1. (Meta)data are assigned a globally unique and persistent identifier</b> 
  <p>
    Every metadata item within CLOSER Discovery has a globally unique persistent
    identifier (PID). That means every variable, every category, every sweep, etc.
    has a unique ID. You can see this PID in the URL of CLOSER Discovery (e.g.
    <a href="https://discovery.closer.ac.uk/item/uk.iser.ukhls/2f1e27ba-e2e9-4bfe-a814-fa54809a77c9" target="_blank">
      https://discovery.closer.ac.uk/item/uk.iser.ukhls/2f1e27ba-e2e9-4bfe-a814-fa54809a77c9
    </a>).
  </p>

  <p>
    Each study has a unique agency identifier registered with the <a href="https://registry.ddialliance.org/" target="_blank">Data
    Documentation Initiative (DDI) Agency Registry</a>, which acts as both a
    namespace in a globally unique ID (e.g. uk.iser.ukhls).
    The combination of the DDI agency identifier, data identifier, and version
    identifier constitutes a globally unique ID.
  </p>

  <b> F2. Data are described with rich metadata</b> 
  <p>
    CLOSER Discovery contains curated, rich metadata which is both generous and
    extensive. It is described well enough to allow discoverability for humans
    and machines. Users can search and explore metadata through filters within
    the platform, and an API supports machine queries. The DDI metadata standard
    is used, providing machine-actionable schemas and consistency across community
    data resources.
  </p>

  <b> F3. Metadata clearly and explicitly include the identifier of the data they describe</b> 
  <p>
    Each dataset documented in CLOSER Discovery is linked to a DOI when one
    exists. All datasets deposited at the UK Data Service (UKDS) include DOIs.
  </p>

  <b> F4. (Meta)data are registered or indexed in a searchable resource</b> 
  <p>
    CLOSER Discovery is an indexed, searchable resource. Metadata can be
    searched both within the platform and via external search engines.
  </p>

  <h2><b>Accessible</b></h2>
  <blockquote>
    “Once the user finds the required data, they need to know how they can be
    accessed, possibly including authentication and authorisation.”
  </blockquote>

  <b> A1. (Meta)data are retrievable by their identifier using a standardised communications protocol</b> 
  <p>
    CLOSER Discovery is a public, web-based platform accessed through HTTPS—an
    open, universally implementable protocol.
  </p>

  <b> A2. Metadata are accessible, even when the data are no longer available</b> 
  <p>
    CLOSER Discovery provides metadata only, not the underlying data. The
    metadata is publicly accessible regardless of the access restrictions on the
    associated study data.
  </p>

  <h2><b>Interoperable</b></h2>
  <blockquote>
    “The data usually need to be integrated with other data. In addition, the
    data need to interoperate with applications or workflows for analysis,
    storage, and processing.”
  </blockquote>

  <b> I1. (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation</b> 
  <p>
    CLOSER Discovery metadata is structured using the DDI standard, which is a
    formal, publicly documented specification. It defines objects, elements, and
    relationships precisely using structured XML, supporting shared
    understanding for both humans and machines.
  </p>

  <b> I2. (Meta)data use vocabularies that follow FAIR principles</b> 
  <p>
    CLOSER Discovery uses controlled vocabularies where possible. External
    vocabularies are managed through the CESSDA Vocabulary Service, which
    provides resolvable URIs and publishes vocabularies in persistent,
    machine-readable formats such as SKOS. CLOSER-specific vocabularies are
    being aligned with external standards or added to the CESSDA service as part
    of DDI vocabularies.
  </p>

  <b> I3. (Meta)data include qualified references to other (meta)data</b> 
  <p>
    CLOSER Discovery provides structured links between related metadata items,
    such as variables, questions, data collections, and sweeps. Work continues
    to enhance cross-referencing, including exploring alignment with ELSST.
  </p>

  <h2><b>Reusable</b></h2>
  <blockquote>
    “The ultimate goal of FAIR is to optimise the reuse of data. To achieve this,
    metadata and data should be well-described so that they can be replicated
    and/or combined in different settings.”
  </blockquote>

  <b> R1. (Meta)data are richly described with a plurality of accurate and relevant attributes</b> 
  <p>
    CLOSER Discovery provides detailed, context-rich metadata supporting both the
    discovery and evaluation of data. Variable-level information includes summary
    statistics to help assess data appropriateness. Metadata captures context such
    as purpose of data collection, dates, source questions, source variables, and
    other provenance information.
  </p>

  <p>
    Metadata is structured using the DDI standard, widely adopted for documenting
    social science and longitudinal data, ensuring consistency and reusability.
  </p>


</div>

  <div class="nav nav-pills nav-stacked col-sm-offset-1 col-sm-3">
    <ul class="help-pages-menu">
    <li class="nav-title">Help Menu</li>
    <li><a href="/page/about/1">About</a></li>
    <li><a href="/page/how-to-guides/6">How-to guides</a></li>
    <li><a href="/page/faqs/4">Frequently Asked Questions</a></li>
    <li><a href="/page/content/2">Study coverage</a></li>
 <li class="active"><a href="/page/fair/27">FAIR infrastructure</a></li>
  </ul>
</div>
</div>

